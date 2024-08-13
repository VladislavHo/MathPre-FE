"use client"

// import { redirect } from "next/navigation"
import { TIMEOUT } from "../../var/var"
import { useEffect } from "react"
import NavComponent from "../Nav/NavComponent"
import styles from './chat.module.scss'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
export default function ChatComponents() {
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {


      router.push("/lessons")
    }, TIMEOUT);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavComponent />
    <div className={styles.chat}>
    <Image src={"/img/chat.png"} alt="challenges" width={300} height={500} />

    </div>
    </>
  )
}
