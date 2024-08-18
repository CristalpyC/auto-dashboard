'use client'
import { Field, Form, Formik } from "formik"
import toast, { LoaderIcon } from "react-hot-toast"
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

export const ContactForm = () => { 
  const style ='p-2 text-[3.2vmin] shadow-sm outline-none mb-2 rounded-sm bg-[#9cc0f567]'
  const form = useRef<any>();
  const [isLoading, setLoading] = useState(false);

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .sendForm('service_s1r2ohm', 'template_39fq2es', form.current, {
        publicKey: 'zNSEwNyo2G0uVyugv',
      })
      .then(
        () => {
          setLoading(false);
          toast("Thanks! We'll reply soon", { icon: '📨' });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <Formik
        initialValues={{ name: '', email:'', message:''}}
        onSubmit={(values, { resetForm }) => {
            sendEmail();
            resetForm();
        }}
    >
        <Form className="flex flex-col" ref={form}>
            <h3 className="text-[#165ECA] text-center lg:text-left md:text-left text-[4vmin] font-medium mb-3">Contact us!</h3>
            <Field className={style} type='text' placeholder='Name' name='name' required/>
            <Field className={style} type='email' placeholder='Email' name='email' required/>
            <Field as="textarea" className={style} placeholder='Type your message here' name='message'/>
            <button
              className={`bg-[#165ECA] text-[3vmin] p-3 text-white transform duration-300 ease-in-out hover:bg-[#205ab1] ${
                isLoading ? "flex gap-2 justify-center items-center" : ""
              }`}
              type="submit"
            >
              Sign in
              {isLoading ? <LoaderIcon /> : null}
            </button>
        </Form>
    </Formik>
  )
}
