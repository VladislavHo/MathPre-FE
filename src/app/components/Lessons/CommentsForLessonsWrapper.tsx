import React, { useState } from 'react'
import styles from './lessons.module.scss'
import Link from 'next/link'
import ChatLessons from './ChatLessons'
interface ICommentsForLessonsWrapper {
  commentText: string
  numberOfAnswers: {
    correct: number
    wrong: number
    poins: number
    poinsInfo: number
    length: number
    activeIndexLesson: number
  }
  updatePoins: () => void
  handleClickComments: (index: number) => void
  updateLessons: () => void
}
export default function CommentsForLessonsWrapper(
  { commentText,
    numberOfAnswers,
    updatePoins,
    handleClickComments,
    updateLessons }: ICommentsForLessonsWrapper) {


  return (
    <>

      {numberOfAnswers.length - 1 === numberOfAnswers.activeIndexLesson ? (
          <ChatLessons />

      ) :
      (
        <div className={styles.wrapperComments}>
        <span>{commentText}</span>


          <button className={styles.done} onClick={() => handleClickComments(numberOfAnswers.activeIndexLesson)}>Done</button>


      </div>
      )
      }


    </>
  )
}
