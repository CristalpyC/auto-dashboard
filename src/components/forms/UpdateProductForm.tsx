import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Button } from '../ui/button';
import { ExtFile } from '@files-ui/react';
import toast, { LoaderIcon } from 'react-hot-toast';
import { fileToBase64 } from '@/actions/convert-file-to-base64';
import { BasicDemoDropzone } from '../dashboard-components/DropZone';
import { updateDocument } from '@/lib/firebase';
import { useDispatch, useSelector } from "react-redux";
import { setProductUrl } from '@/redux/slices/productUrl.slice';
import { StateProps } from '@/interfaces/state';

interface UpdateProductFormProps {
    closeModal: () => void;
    itemToUpdate?: any;
}
  
export const UpdateProductForm = ({ closeModal, itemToUpdate }: UpdateProductFormProps) => {
    const data = localStorage.getItem('userInfo');
    let user: any;

    if (data){
      user = JSON.parse(data);
    }

  const style = 'w-[100%] p-2 outline-none shadow-sm bg-blue-100 mb-3 rounded-sm';
  
  const dispatch = useDispatch();
  const productUrl = useSelector((state: StateProps) => state.productUrl);
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  // Upload files function
  const updateFiles = async (incommingFiles:ExtFile[]) => {
    try{
        setFiles(incommingFiles);
        const base64 = incommingFiles[0].file;
        const imageb = await fileToBase64(base64);
        dispatch(setProductUrl(imageb));

    } catch(error){
        toast.error("Couldn't upload the photo", { duration: 2500 });
    }
  };

  // To remove the file
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };
  

  return (
    <Formik
        initialValues={{...itemToUpdate}}
        onSubmit={async (itemToUpdate) => {     
            try{
              setLoading(true);
              const path = `users/${user?.uid}/products/${itemToUpdate.id}`;
              delete itemToUpdate?.profits;
              const productsData = {...itemToUpdate, productUrl}
              await updateDocument(path, productsData);

              if (!itemToUpdate){
                toast.error('Please fill the form', { duration: 2500 });
              } else {
                toast.success('Data has beed updated', { duration: 2500 });
              }
            } catch(error: any){
              toast.error(`Error: ${error.message}`, { duration: 10500 });
            } finally{
              closeModal();
              setLoading(false);
            }
        }}
    >
        {/* Form component */}
        <Form className='flex flex-col justify-center items-center'>
            <BasicDemoDropzone updateFiles={updateFiles} removeFile={removeFile} files={files} />
            <Field className={style} type='text' placeholder='Name' name='name'/>
            {/* Select */}
            <Field as='select' className={style} name='status'>
              <option value="" disabled className='bg-white text-gray-300'>Status</option>
              <option value="new" className='bg-white text-gray-500'>New</option>
              <option value="used" className='bg-white text-gray-500'>Used</option>
            </Field>
            <Field className={style} type='number' placeholder='Price' name='price'/>
            <Field className={style} type='number' placeholder='Units' name='units'/>
            <Field className={style} type='number' placeholder='Sold units' name='soldunits'/>
            <Button className="w-[100%] bg-blue-500 hover:bg-blue-700" type='submit'>
              Edit product
              {isLoading ? <LoaderIcon className='ml-3'/> : null}
            </Button>
        </Form>
    </Formik>
  )
}
