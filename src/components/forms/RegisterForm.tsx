"use client"
import { Title } from "@/components/Title";
import { User } from "@/interfaces/user";
import { ErrorValues } from "@/interfaces/errorValues";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import { handleRegister } from "@/actions/handleRegister";

const RegisterForm = () => {
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
    } else if (!values.repeatPassword) {
      errors.repeatPassword = "This field is obligatory";
    } else if (values.repeatPassword !== values.password) {
        errors.repeatPassword = "Passwords don't match";
    }

    return errors;
  };

  return (
    <div className="lg:flex lg:flex-row md:flex-row md:flex justify-between">
      <div className="lg:bg-[#165ECA] md:bg-[#165ECA] lg:p-[5rem] md:lg:p-[5rem] lg:w-[100%] lg:h-[100vh] md:w-[100%] md:h-[100vh] flex flex-col justify-center items-center">
        <img
          className="w-[70%] lg:w-[90%] md:w-[90%]"
          src="/singup-img.png"
          alt="user"
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
          initialValues={{ name: "", email: "", password: "", repeatPassword: "" }}
          onSubmit={(values, { resetForm }) => {
            //handleRegister(values);
            handleRegister(
                values,
                () => setLoading(true),
                () => setLoading(false)
            );

            resetForm();
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

            <Field
              className={style}
              placeholder="Repeat password"
              name="repeatPassword"
              type="password"
            />
            <ErrorMessage
              name="repeatPassword"
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

export default RegisterForm;
