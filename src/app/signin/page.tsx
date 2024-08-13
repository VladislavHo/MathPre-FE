import { getUserSession } from '@/app/lib/get-user-session';
import { redirect } from 'next/navigation';
import React from 'react'
import SignInForm from '@/app/components/Forms/SignForm/SignForm';
import { getSession } from 'next-auth/react';
export default function SignIn() {


  return (
    <>
      <SignInForm/>
    </>
  )
}
