import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Button } from '../ui/button';
import { ExtFile } from '@files-ui/react';
import toast from 'react-hot-toast';
import { fileToBase64 } from '@/actions/convert-file-to-base64';
import { BasicDemoDropzone } from '../dashboard-components/DropZone';


export const AddProductForm = ({ closeModal }: { closeModal: () => void}) => {
  const style = 'w-[100%] p-2 outline-none shadow-sm bg-blue-100 mb-3 rounded-sm';
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const [productUrl, setProductUrl] = React.useState<string>('');

  const updateFiles = async (incommingFiles:ExtFile[]) => {
    try{
         //do something with the files
        setFiles(incommingFiles);
        const base64 = incommingFiles[0].file;
        const imageb = await fileToBase64(base64);
        setProductUrl(imageb);
        //console.log('FILE: ', imageb);
        //even your own upload implementation

    } catch(error){
        toast.error("Couldn't upload the photo", { duration: 2500 });
    }
  };

  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };

  return (
    <Formik
        initialValues={{ name: '', price: 0, units: 0, soldunits: 0}}
        onSubmit={(values, { resetForm }) => {
            const data = {...values, productUrl}
            //console.log(data);
            closeModal();
            resetForm();
        }}
    >
        <Form className='flex flex-col justify-center items-center'>
            <BasicDemoDropzone updateFiles={updateFiles} removeFile={removeFile} files={files}/>
            <Field className={style} type='text' placeholder='Name' name='name'/>
            <Field className={style} type='number' placeholder='Price' name='price'/>
            <Field className={style} type='number' placeholder='Units' name='units'/>
            <Field className={style} type='number' placeholder='Sold units' name='soldunits'/>
            <Button className="w-[100%] bg-blue-500 hover:bg-blue-700">Add product</Button>
        </Form>
    </Formik>
  )
}
