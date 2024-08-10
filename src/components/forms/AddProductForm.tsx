import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Button } from '../ui/button';
import { ExtFile } from '@files-ui/react';
import toast, { LoaderIcon } from 'react-hot-toast';
import { fileToBase64 } from '@/actions/convert-file-to-base64';
import { BasicDemoDropzone } from '../dashboard-components/DropZone';
import { addDocument } from '@/lib/firebase';


export const AddProductForm = ({ closeModal }: { closeModal: () => void}) => {
  const data = localStorage.getItem('userInfo');
    let user: any;

    if (data){
      user = JSON.parse(data);
    }

  const style = 'w-[100%] p-2 outline-none shadow-sm bg-blue-100 mb-3 rounded-sm';
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const [productUrl, setProductUrl] = React.useState<string>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);

  // Upload files function
  const updateFiles = async (incommingFiles:ExtFile[]) => {
    try{
        setFiles(incommingFiles);
        const base64 = incommingFiles[0].file;
        const imageb = await fileToBase64(base64);
        setProductUrl(imageb);


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
        initialValues={{ name: '', status: '', price: 0, units: 0, soldunits: 0}}
        onSubmit={async (values, { resetForm }) => {
            // Add the product data
            const data = { ...values, productUrl }
            const path = `users/${user?.uid}/products`;
            const conditions = values.name === '' || values.status === '' || values.price === 0;

            try{
              setLoading(true);

              if (conditions){
                toast.error('Please fill the fields', { duration: 2500 });

              } else {
                  await addDocument(path, data);
                  closeModal();
                  resetForm();
              }
              
            } catch(error){
              toast.error("Couldn't add the car", { duration: 2500 });

            } finally{
              setLoading(false);
              toast.success("The car has been added", { duration: 2500 });
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
              Add product
              {isLoading ? <LoaderIcon className='ml-3'/> : null}
            </Button>
        </Form>
    </Formik>
  )
}
