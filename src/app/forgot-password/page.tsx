"use client";

import { User } from '@/interfaces/user';
import { ErrorValues } from '@/interfaces/errorValues';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Metadata } from 'next'
import React, { useState } from 'react'
import toast, { LoaderIcon } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import './style.css';
import { passwedRecover } from '@/lib/firebase';

const metadata: Metadata = {
    title: 'Forgot password',
    description: 'Password reset'
}

const ForgotPassword = () => {
  const style = "shadow-sm border-none mb-5 shadow-sm outline-none border border-black p-3";
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div id='forgot-passwd-container'>
      <div className="lg:flex md:flex justify-between p-10" >
        <div className='mt-[8rem] lg:mt-[5rem] md:mt-[8rem] p-11 w-[100%] bg-[#165ECA]'>
          <h1 className='text-2xl font-bold mb-3 text-slate-100'>Please enter your email to recover your password</h1>
          <Formik
              initialValues={{ email: "" }}
              onSubmit={async (values, { resetForm }) => {
                try{
                  await passwedRecover(values);
                  toast.success('Password reset link sent. Please check your email', { duration: 2500});
                  resetForm();  

                } catch (error: any) {
                  toast.error(error.message, { duration: 2500});
                }
              }}
          >
              <Form className='flex flex-col'>
                  <Field className={style} placeholder="Email" name="email" type="email" required />
                  <button
                    className={`bg-[#6393DB] p-3 text-white transform duration-300 ease-in-out hover:bg-[#5582c6] ${isLoading ? "flex gap-2 justify-center items-center" : ""}`}
                    type="submit"
                  >
                    Request password reset
                    {isLoading ? <LoaderIcon /> : null}
                  </button>

                  <a href='/login' className='mt-3 text-white font-bold hover:text-blue-100'>
                      ← Back to sign in
                  </a>
              </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;
