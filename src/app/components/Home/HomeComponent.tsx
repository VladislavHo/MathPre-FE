"use client"

import React, { useEffect, useState } from 'react'
import NavComponent from '../Nav/NavComponent'
import styles from './home.module.scss'
import Image from 'next/image'
import LessonLinkComponent from '../LessosnLinkComponens/LessonLinkComponent'
import { TIMEOUT } from '@/app/var/var'
export default function HomeComponent() {
  const [isOpenLessons, setIsOpenLessons] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsOpenLessons(true)
    }, TIMEOUT)
  }, [])
  return (
    <>
      <NavComponent />
      <div className={styles.home}>

        {isOpenLessons && (
          <LessonLinkComponent setIsOpenLessons={setIsOpenLessons} />
        )}

        <Image src={"/img/home.jpg"} alt="challenges" width={300} height={500} />

      </div>
    </>

  )
}
