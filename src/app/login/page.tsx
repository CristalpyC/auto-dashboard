import LoginForm from "@/components/forms/LoginForm"
import { store } from "@/redux/store"
import { Metadata } from "next";
import { Provider } from "react-redux"

const metadata: Metadata = {
  title: "Login",
  description: "Login form",
};

const Login = () => {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  )
}

export default Login
