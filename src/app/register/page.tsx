"use client"

import RegisterForm from "@/components/forms/RegisterForm";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Register",
  description: "Register form",
};

const Register = () => {
  return(
    <RegisterForm />
  )
}

export default Register;
