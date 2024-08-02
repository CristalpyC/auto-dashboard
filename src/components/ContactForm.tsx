'use client'
import { Field, Form, Formik } from "formik"
import toast from "react-hot-toast"
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export const ContactForm = () => { 
  const style ='p-2 text-[3.5vmin] shadow-sm outline-none mb-2 rounded-sm bg-[#9cc0f567]'
  const form = useRef<any>();

  const sendEmail = () => {
    emailjs
      .sendForm('service_s1r2ohm', 'template_39fq2es', form.current, {
        publicKey: 'zNSEwNyo2G0uVyugv',
      })
      .then(
        () => {
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
            <textarea className={style} placeholder='Type your message here' name='message'/>
            <button type="submit" className="bg-[#165ECA] rounded-sm shadow-sm p-2 text-[3.5vmin] text-center text-white hover:bg-[#124fab]">Submit</button>
        </Form>
    </Formik>
  )
}
