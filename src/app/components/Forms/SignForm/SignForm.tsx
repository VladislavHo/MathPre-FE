"use client"

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

import { FormEventHandler, useEffect, useState } from "react";
import styles from "./signin.module.scss";
import { useRouter } from "next/navigation";
export default function SignInForm() {
const route = useRouter();
useEffect(() => {
  setTimeout(() => {
    route.push("/avatars")
  }, 3000)
}, [])




  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);


  };





  return (

    <>

      <div className={styles.form}>
        <h2>MathPad</h2>
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>

          <div className={styles.inputField}>
            <input type="email" name="email" id="email" required placeholder="Email" />
            <input type="password" name="password" id="password" required placeholder="Password" />
            <span><a href="/register">Forgot your password?</a> </span>
          </div>



          <span className={styles.or}>or</span>


          <div className={styles.socialMediaSigIn}>
            <a href="#" onClick={() => signIn('google', { callbackUrl: '/avatars', redirect: true })}>
              <Image src={"/svg/google.svg"} alt="google" width={34} height={34} />
            </a>

          </div>


          <button className={styles.signin}>Sign In</button>
          <p>
            Don’t have account? <a href="#"> Create account </a>
          </p>

        </form>

        <div className={styles.supports}>
          <p>All interactives created & powered by AVIOR </p>
          <Image className={styles.logo} src={"/logo-avior.svg"} alt="logo" width={20} height={20} />
        </div>


      </div>

    </>

  )
}
