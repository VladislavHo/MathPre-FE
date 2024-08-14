"use client"

import React, { useEffect, useState } from 'react'
import styles from './lessons.module.scss'
import { ILessons } from '@/app/types/types'
import Image from 'next/image';
import { SIZE_CARDS, TASKS } from '@/app/var/var';
import AvatarsIntro from '../AvatarsIntro/AvatarsIntro';
import Link from 'next/link';
import NavComponent from '../Nav/NavComponent';
import CommentsForLessonsWrapper from './CommentsForLessonsWrapper';
import Lesson from './Lesson';
import { observer } from 'mobx-react-lite';
import store from '@/app/store/store';
import ChatLessons from './ChatLessons';
// import ChatLessons from './ChatLessons';

const LessonsField = observer(() => {
  const TIMEOUTMIN = 30000 //30sec 
  const TIMEOUTMAX = 60000 * 2 //2min 

  const [inputValue, setInputValue] = useState('')
  const [lessonsData, setLessonsData] = useState<any>([])
  const [translateValue, setTranslateValue] = useState(0)
  const [isActiveCommentsResult, setIsActiveComments] = useState(false)
  const [isActiveChatLessons, setIsActiveChatLessons] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [numberOfAnswers, setNumberOfAnswers] = useState({
    correct: 0,
    wrong: 0,
    poins: 0,
    poinsInfo: 0,
    length: 0,
    activeIndexLesson: 0
  })

  useEffect(() => {
    setNumberOfAnswers((prev) => ({
      ...prev,
      // poinsInfo: lessons[0].totalPoints!,
      length: lessonsData.length - 1
    }))
  }, [lessonsData])





  useEffect(() => {

    const timer = setTimeout(() => {

      setNumberOfAnswers((prev) => ({
        ...prev,
        activeIndexLesson: prev.activeIndexLesson + 1
      }))
      setTranslateValue((SIZE_CARDS + 20) * (numberOfAnswers.activeIndexLesson + 1))

    }, numberOfAnswers.activeIndexLesson === 0 || 2 ? TIMEOUTMIN : TIMEOUTMAX);


    if (numberOfAnswers.activeIndexLesson === lessonsData.length - 1) {
      clearTimeout(timer);

      const timer2 = setTimeout(() => {
        setIsActiveChatLessons(true)

      }, TIMEOUTMIN)

      return () => clearTimeout(timer2);
    }




    return () => clearTimeout(timer);



  }, [numberOfAnswers])



  useEffect(() => {

    const sortedLessons = TASKS.sort((a, b) => a.id - b.id);
    const randomNumber = Math.random()

    if (randomNumber > 0.5) {
      const newArr = [...sortedLessons]
      newArr.splice(1, 1)
      setLessonsData(newArr);
    } else {
      const newArr = [...sortedLessons]
      newArr.splice(2, 1)
      setLessonsData(newArr);
    }


  }, [])


  const checkedAnswer = (event: React.FormEvent<HTMLFormElement>, index: number) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    if (String(formData.get('text')) === lessonsData![index].answer) {
      setCommentText(`Correct! Your score is ${lessonsData![index].point} points! 🌟`)


      setNumberOfAnswers(prev => ({
        ...prev,
        poins: prev.poins + (lessonsData![index]?.point!),
        correct: prev.correct + 1,
        poinsInfo: prev.poinsInfo + lessonsData![numberOfAnswers.activeIndexLesson]?.point!,
      }))

      setIsActiveComments(true)


    } else {
      setCommentText(`You're wrong. 🥺`)
      setIsActiveComments(true)
      setNumberOfAnswers(prev => ({
        ...prev,
        wrong: prev.wrong + 1,
        // poinsInfo: prev.poinsInfo,
      }))
    }

  }


  const handleClickComments = () => {
    console.log(true)
    store.setPointsAction(+numberOfAnswers.poinsInfo)
    store.setWinsAction(1)
    setTranslateValue((SIZE_CARDS + 20) * (numberOfAnswers.activeIndexLesson + 1))

    // setActiveIndexLesson(prev => prev + 1)
    setNumberOfAnswers(prev => ({
      ...prev,
      activeIndexLesson: prev.activeIndexLesson + 1
    }))
    setIsActiveComments(false)
    setInputValue("")
  }


  return (
    <>
      <NavComponent />
      <div className={styles.lessonSection}>
        <AvatarsIntro />
        <div className={styles.lessonsFiled}>
          {isActiveChatLessons && (
            <ChatLessons />

          )}
          {isActiveCommentsResult && (
            <CommentsForLessonsWrapper
              commentText={commentText}
              numberOfAnswers={numberOfAnswers}
              handleClickComments={handleClickComments}
            />
          )}
          {/* Header */}
          <div className={styles.lessonsCardHeader}>
            <Image src={'/svg/message.svg'} width={37} height={27} alt="svg" />

            <div className={styles.dots}>
              {lessonsData && lessonsData.map((_: any, index: number) => (
                <span className={[styles.dot, index === numberOfAnswers.activeIndexLesson ? styles.active : ''].join(' ')} key={Math.random()}></span>
              ))}
            </div>


            <div className={styles.poins}>
              <h6>Points</h6>
              <div className={styles.total}>
                <Image src={'/svg/win.svg'} width={13} height={13} alt="svg" />

                <span>
                  {`${numberOfAnswers?.poinsInfo} `}
                  &#32;/ 300</span>

              </div>

            </div>
          </div>




          <div className={styles.lessonsFiledSlider}>
            <div
              className={styles.lessonsFiledSliderItem}
              style={{
                width: `${(3 * SIZE_CARDS) + (3 + 1 * 50)}px`,
                transform: `translate(-${translateValue}px, 0)`
              }}>
              {lessonsData && lessonsData.map((lesson: ILessons, index: number) => (


                <Lesson
                  key={lesson.id + Math.random()}
                  lesson={lesson}
                  index={index}
                  activeIndexLesson={numberOfAnswers.activeIndexLesson}

                />

              ))}

            </div>
          </div>


          {lessonsData.length - 1 === numberOfAnswers.activeIndexLesson ? (
            <div className={styles.buttonWrapper}>

              <button className={styles.describe} onClick={() => setIsActiveChatLessons(true)}>Describe</button>
            </div>
          ) : (

            <form onSubmit={(e) => checkedAnswer(e, numberOfAnswers.activeIndexLesson)}>
              <div className={styles.textarea}>
                <input value={inputValue} type="text" name="text" placeholder='Your Answer...' onChange={(e) => setInputValue(e.target.value)} />
                <button className={styles.lessonsSend}>Send</button>
              </div>
            </form>
          )}


        </div>
      </div>
    </>


  )
})

export default LessonsField