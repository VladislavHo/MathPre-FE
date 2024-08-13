"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './profile.module.scss'
import NavComponent from '../Nav/NavComponent';

import { TIMEOUT } from '@/app/var/var';
import { InstagramSVG, TickTockSVG, TwitchSVG } from '../SVG/SVG';
import { observer } from 'mobx-react-lite';
import store from '@/app/store/store';




const ProfileCompoent = observer(() => {

  const [isOpenLessons, setIsOpenLessons] = useState(false)





  useEffect(() => {
    setTimeout(() => {
      setIsOpenLessons(true)
    }, TIMEOUT)
  }, [])
  return (
    <>
      <NavComponent />
      <div className={styles.profile}>
        <div className={styles.profileWrapper}>

          <div className={styles.fieldInfo}>
            <h2>Analytics</h2>

            <div className={styles.stats}>
              <h4>Weekly stats</h4>
              <div className={styles.cards}>

                <div className={styles.card}>
                  <h6>My challenges</h6>
                  <span>7</span>
                </div>

                <div className={styles.card}>
                  <h6>My lessons</h6>
                  <span>6</span>
                </div>

                <div className={styles.card}>
                  <h6>My points</h6>
                  <span className={styles.poins}>{store.points}</span>
                </div>

                <div className={styles.card}>
                  <h6>Winns</h6>
                  <span>7 <Image src="/svg/wins.svg" alt="coin" width={43} height={43} /></span>
                </div>

              </div>
            </div>

          </div>

          <div className={styles.diagramWrapper}>
            <h4>Stats per last week</h4>
            <div className={styles.diagramField}>
              <div className={styles.title}>
                <span>Lessons
                  completed</span>
              </div>
              <div className={styles.diagram}>
                <div className={styles.column}>
                  <span className={styles.value}>15</span>
                  <div className={styles.columnValue1}>
                    <span>A+</span>
                  </div>
                </div>
                <div className={styles.column}>
                  <span className={styles.value}>9</span>
                  <div className={styles.columnValue2}>
                    <span>B</span>
                  </div>
                </div>
                <div className={styles.column}>
                  <span className={styles.value}>12</span>
                  <div className={styles.columnValue3}>
                    <span>B-</span>
                  </div>
                </div>
                <div className={styles.column}>
                  <span className={styles.value}>18</span>
                  <div className={styles.columnValue4}>
                    <span>C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.share}>
            <span>Share</span>

          </div>


          <div className={styles.socialMedia}>
            <ul>
              <li>
                <a href="#"><InstagramSVG /></a>
              </li>
              <li>
                <a href="#"><TickTockSVG /></a>
              </li>
              <li>
                <a href="#"><TwitchSVG /></a>
              </li>
            </ul>
          </div>
        </div>


      </div>

    </>
  )
})

export default ProfileCompoent