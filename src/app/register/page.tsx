import React from 'react'
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm'
import { redirect } from 'next/navigation';
import { getUserSession } from '../lib/get-user-session';

export default function Register() {
  const session = getUserSession();

  // if (!!session) {
  //   redirect('/profile')
  // }

  return (
    <>
      <RegisterForm/>
    </>
  )
}
