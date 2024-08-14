"use client"

import { useEffect, useState } from "react";
import styles from './avatar.module.scss'
import Image from "next/image";
import {  useRouter } from "next/navigation"
import Link from "next/link";
import NavComponent from "../Nav/NavComponent";
import { AVATARS } from "@/app/var/var";




export default function AvatarsComponent() {

  const [selectedAvatar, setSelectedAvatar] = useState(3);
  const route = useRouter();



  useEffect(() => {
    setTimeout(() => {

      route.push("/chat")
    }, 3000)
  }, [route]);

  const handleClick = (id: number) => {
    setSelectedAvatar(id);
  }




  return (
    <>
      <NavComponent />
      <div className={styles.avatars}>

        <h2>Choose your teacher and start practicing your math skills!</h2>


        <div className={styles.avatarCards}>
          {AVATARS.map((avatar: any) => (

            <div key={avatar.id + Math.random()}
              className={styles.avatarWrapper}
              onClick={() => handleClick(avatar.id)}>
              <div className={styles.avatar}>
                <div className={[styles.supLogo, avatar.id === selectedAvatar ? styles.selected : ''].join(' ')}>
                  <Image src={'/svg/isok.svg'} width={20} height={20} alt={''} />
                </div>
              <Image src={avatar.image} width={100} height={100} alt={avatar.title} />
              </div>
              <span>{avatar.name}</span>


            </div>


          ))}
        </div>

        <div className={styles.linkWrapper}>

          <Link  href={"/chat"}>Done</Link>
        </div>
      </div>
    </>

  )
}
