"use client";



import { FormEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import { registerUser } from "@/app/actions";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./register.module.scss";
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/profile");
    }
  }, [session.status, router]);


  const [dataUser, setDataUser] = useState({ email: '', password: '', confirmPassword: '', fullName: '' });


  const [error, setError] = useState(true);


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();


    try {
      const res = await registerUser({
        email: dataUser.email,
        fullName: dataUser.fullName,
        password: dataUser.password
      });





      if (res) {
        await signIn("credentials", {
          email: dataUser.email,
          password: dataUser.password,
          redirect: true,
          callbackUrl: "/avatars"
        });


      }

    } catch (error) {
      console.log(error, "error")
    }
  };


  return (

    <>

      <div className={styles.form}>

        <h2>MathPad</h2>
        {/* <Image className={styles.logo} src={"/logo-avior.svg"} alt="logo" width={145} height={155} /> */}
        <h4>Registration</h4>
        <form onSubmit={(e) => handleSubmit(e)}>

          <div className={styles.inputField}>
            <input type="text" onChange={(e) => setDataUser({ ...dataUser, fullName: e.target.value })} name="name" id="name" required placeholder="Name" />

            <input type="email" onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} name="email" id="email" required placeholder="Email" />
            <input type="password" onChange={(e) => setDataUser({ ...dataUser, password: e.target.value })} name="password" id="password" required placeholder="Password" />
            <input type="password" onChange={(e) => setDataUser({ ...dataUser, confirmPassword: e.target.value })} name="confirmPassword" id="confirmPassword" required placeholder="Confirm Password" />

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
        {!error && <p className="error">Wrong email or password</p>}
      </div>

    </>

  )
}