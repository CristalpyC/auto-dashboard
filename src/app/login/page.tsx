"use client"
import LoginForm from "@/components/forms/LoginForm"
import { store } from "@/redux/store"
import { Provider } from "react-redux"

const Login = () => {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  )
}

export default Login
