import { Title } from '@/components/Title'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login form'
}

const Login = () => {
  return (
    <div>
        Login page
        <Title />
    </div>
  )
}

export default Login;
