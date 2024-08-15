"use client"
import { Title } from "@/components/Title";
import { Field, Form, Formik } from "formik";
import { Metadata } from "next";
import { LoaderIcon } from "react-hot-toast";
import { handleLogin } from "@/actions/handleLogin";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const LoginForm = () => {
  const style = "mb-5 shadow-sm outline-none border border-black p-3";

  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="lg:flex md:flex justify-between">
      <div className="lg:mt-[5rem] md:mt-[5rem] p-11 w-[100%]">
        <Title
          title="Login"
          message="You don’t have an account?"
          spanMessage="Register"
          linkTo="/register"
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            handleLogin({
              values,
              setLoadingStart: () => setLoading(true),
              setLoadingEnd: () => setLoading(false),
              router,
            });
          }}
        >
          <Form className="flex flex-col">
            <Field
              className={style}
              placeholder="Email"
              name="email"
              type="email"
            />
            <Field
              className={style}
              placeholder="Password"
              name="password"
              type="password"
            />

            <button
              className={`bg-[#165ECA] p-3 text-white transform duration-300 ease-in-out hover:bg-[#205ab1] ${
                isLoading ? "flex gap-2 justify-center items-center" : ""
              }`}
              type="submit"
            >
              Sign in
              {isLoading ? <LoaderIcon /> : null}
            </button>
            <a
              href="/forgot-password"
              className="mt-3 text-end font-bold hover:text-gray-400 hover:italic"
            >
              Forgot password?
            </a>
          </Form>
        </Formik>
      </div>
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
    </div>
  );
};

export default LoginForm;
