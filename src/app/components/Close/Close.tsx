import React from 'react'
import styles from './close.module.scss'
export default function Close({setIsOpenLessons}: {setIsOpenLessons: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <button className={styles.close} onClick={() => setIsOpenLessons((prev) => !prev)}>
      <span></span>
      <span></span>
    </button>
  )
}
