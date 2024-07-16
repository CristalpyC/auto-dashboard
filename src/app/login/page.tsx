"use client";

import { Title } from '@/components/Title'
import { Field, Form, Formik } from 'formik'
import { Metadata } from 'next'
import React from 'react'

const metadata: Metadata = {
    title: 'Login',
    description: 'Login form'
}

const Login = () => {
    const style = "mb-5 shadow-sm outline-none border border-black p-3"
  return (
    <div className="lg:flex md:flex justify-between">
      <div className='lg:mt-[5rem] md:mt-[5rem] p-11 w-[100%]'>
        <Title />
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
            console.log(values);
            }}
        >
            <Form className='flex flex-col'>
                <Field className={style} placeholder="Email" name="email" type="email" />
                <Field className={style} placeholder="Password" name="password" type="password" />
                <button className='bg-[#165ECA] p-3 text-white transform duration-300 ease-in-out hover:bg-[#205ab1]' type="submit">Sign in</button>
            </Form>
        </Formik>
      </div>
      <div className='lg:bg-[#165ECA] md:bg-[#165ECA] lg:p-[5rem] md:lg:p-[5rem] lg:w-[100%] lg:h-[100vh] md:w-[100%] md:h-[100vh] flex flex-col justify-center items-center'>
            <img className="hidden lg:block md:block lg:max-w-[80%] md:max-w-[80%]" src="/car-acc.png" alt="car" />
            <img className="w-[100%] hover:hue-rotate-30" src="/car.png" alt="car" />
      </div>
    </div>
  )
}

export default Login;
