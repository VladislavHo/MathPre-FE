"use client";

import React, { useEffect, useState } from 'react'
import styles from './challenges.module.scss'
import Image from 'next/image'
import NavComponent from '../Nav/NavComponent'
import LessonLinkComponent from '../LessosnLinkComponens/LessonLinkComponent';
import { TIMEOUT } from '@/app/var/var';
export default function Challenges() {
  const [isOpenLessons, setIsOpenLessons] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsOpenLessons(true)
    }, TIMEOUT)
  }, [])
  return (
    <>
      <NavComponent />
      <div className={styles.challenges}>

        {isOpenLessons && (
          <LessonLinkComponent setIsOpenLessons={setIsOpenLessons} />
        )}

        <Image src={"/img/challenges.jpg"} alt="challenges" width={300} height={500} />

      </div>
    </>

  )
}
