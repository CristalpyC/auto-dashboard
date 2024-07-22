"use client";

import { Title } from "@/components/Title";
import { User } from "@/interfaces/user";
import { ErrorValues } from "@/interfaces/errorValues";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Metadata } from "next";
import React, { useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import { handleRegister } from "@/actions/handleRegister";

const metadata: Metadata = {
  title: "Login",
  description: "Login form",
};

const Register = () => {
  const style = "mb-5 shadow-sm outline-none border border-black p-3";
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleValidation = (values: User) => {
    const errors: ErrorValues = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const nameRegex = /^(?!.*\d)[A-Za-zÀ-ÖØ-öø-ÿ\s]{6,}$/;

    if (!values.email) {
      errors.email = "Write your email";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is incorrect";
    } else if (!values.password) {
      errors.password = "Write your password";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password must be 8+ characters with uppercase, number, and special character";
    } else if (!values.name) {
        errors.name = "Write your name";
    } else if (!nameRegex.test(values.name)) {
        errors.name = "The name is incorrect";
    }

    return errors;
  };

  return (
    <div className="lg:flex md:flex justify-between">
      <div className="lg:bg-[#165ECA] md:bg-[#165ECA] lg:p-[5rem] md:lg:p-[5rem] lg:w-[100%] lg:h-[100vh] md:w-[100%] md:h-[100vh] flex flex-col justify-center items-center">
        <img
          className="hidden lg:block md:block lg:max-w-[80%] md:max-w-[80%]"
          src="/car-acc.png"
          alt="car"
        />
        <img
          className="w-[100%] hover:hue-rotate-30"
          src="/car.png"
          alt="car"
        />
      </div>
      <div className="lg:mt-[5rem] md:mt-[5rem] p-11 w-[100%]">
        <Title
          title="Create your account"
          message="Already have an account?"
          spanMessage="Sign in"
          linkTo="/login"
        />
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => {
            //handleRegister(values);
            handleRegister(
                values,
                () => setLoading(true),
                () => setLoading(false)
            );
          }}
          validate={handleValidation}
        >
          <Form className="flex flex-col">
            <Field
              className={style}
              placeholder="Name"
              name="name"
              type="text"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-600 font-medium italic mb-5 mt-[-1rem]"
            />

            <Field
              className={style}
              placeholder="Email"
              name="email"
              type="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 font-medium italic mb-5 mt-[-1rem]"
            />

            <Field
              className={style}
              placeholder="Password"
              name="password"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600 font-medium italic mb-5 mt-[-1rem]"
            />

            <button
              className={`bg-[#165ECA] p-3 text-white transform duration-300 ease-in-out hover:bg-[#205ab1] ${isLoading ? "flex gap-2 justify-center items-center" : ""}`}
              type="submit"
            >
              Create
              {isLoading ? <LoaderIcon /> : null}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
