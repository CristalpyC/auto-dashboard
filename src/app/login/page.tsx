import LoginForm from "@/components/forms/LoginForm"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login form",
};

const Login = () => {
  return (
    <LoginForm />
  )
}

export default Login
