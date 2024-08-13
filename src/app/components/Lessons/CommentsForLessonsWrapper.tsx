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
  handleClickComments: () => void
}
export default function CommentsForLessonsWrapper(
  { commentText,
    numberOfAnswers,
    handleClickComments }: ICommentsForLessonsWrapper) {

  console.log(numberOfAnswers.activeIndexLesson === numberOfAnswers.length)

  return (
    <>

      {numberOfAnswers.length === numberOfAnswers.activeIndexLesson ? (
        <ChatLessons />

      ) :
        (
          <div className={styles.wrapperComments}>
            <span>{commentText}</span>


            <button className={styles.done} onClick={() => handleClickComments()}>Done</button>


          </div>
        )
      }


    </>
  )
}
