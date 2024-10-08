import React from 'react'
import styles from './lessons.module.scss'
import Image from 'next/image'
import { ILessons } from '@/app/types/types'





export default function Lesson({ lesson, index, activeIndexLesson } : any) {
  return (
    <div
      key={lesson.id + Math.random()}
      className={[styles.lessonsFiledSliderItemCard, index === activeIndexLesson ? styles.active : ''].join(' ')} >
      <div
        className={styles.lessonsFiledSliderItemBgImg}
        style={{ backgroundColor: `${lesson.background}` }}>

        <Image
          width={lesson.size.w}
          height={lesson.size.h}
          src={`${lesson.img}`}
          alt="" />
      </div>

      <div className={styles.description}>
        <p className={styles[lesson.title]} key={lesson.id + Math.random()}>{lesson.description}</p>
      </div>
    </div>
  )
}
