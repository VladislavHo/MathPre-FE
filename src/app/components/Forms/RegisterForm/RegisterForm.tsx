"use client";

import Image from "next/image";

import styles from "./register.module.scss";
import Link from "next/link";

export default function RegisterForm() {
  return (

    <>

      <div className={styles.form}>

        <h2>MathPad</h2>
        {/* <Image className={styles.logo} src={"/logo-avior.svg"} alt="logo" width={145} height={155} /> */}
        <h4>Registration</h4>
        <form >

          <div className={styles.inputField}>
            <input type="text" name="name" id="name" required placeholder="Name" />

            <input type="email" name="email" id="email" required placeholder="Email" />
            <input type="password" name="password" id="password" required placeholder="Password" />
            <input type="password" name="confirmPassword" id="confirmPassword" required placeholder="Confirm Password" />

          </div>





          <button >Create</button>
          <div className={styles.redirectLink}>

            <Link href="/signin">Already have an account?</Link>
          </div>


        </form>
        <div className={styles.supports}>
          <p>All interactives created & powered by AVIOR </p>
          <Image className={styles.logo} src={"/logo-avior.svg"} alt="logo" width={20} height={20} />
        </div>
      </div>

    </>

  )
}