import React from 'react'
import styles from './lessonLink.module.scss'
import Link from 'next/link'
import Close from '../Close/Close'
export default function LessonLinkComponent({ setIsOpenLessons }: { setIsOpenLessons: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className={styles.lessosnLinkCompoenents}>
      <div className={styles.wrapperComponets}>
        <Close setIsOpenLessons={setIsOpenLessons} />
        <p> Let{"'"}s start! 🌟</p>
        <Link href={'/lessons'}>Lessons</Link>
      </div>
    </div>
  )
}
