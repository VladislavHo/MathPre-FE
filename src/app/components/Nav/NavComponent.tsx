"use client"
import { useRouter } from 'next/router'
import { AnalyticsSVG, ChallengesSVG, HomeSVG, LessonsSVG, ProfileSVG } from '../SVG/SVG'
import styles from './nav.module.scss'
import { useEffect, useState } from 'react'

export default function NavComponent() {
  const [active, setActive] = useState(true)




  // console.log(router);

  // useEffect(() => {
  //   switch (pathname) {
  //     case '/signin':
  //       setActive(false)
  //       break;
  //     case '/register':
  //       setActive(false)
  //       break;

  //     default:
  //       break;
  //   }

  // }, [pathname])


  return (

    <nav className={[styles.nav, active ? styles.active : ''].join(' ')}>

      <ul>
        <li>
          {/* home */}
          <a href="/home">
            <div className="logo">
              {HomeSVG()}
            </div>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/profile">
            <div className="logo">
              {ProfileSVG()}
            </div>
            <span>Profile</span>
          </a>
        </li>
        <li>
          {/* challenges */}
          <a href="/challenges">
            <div className="logo">
              {ChallengesSVG()}
            </div>
            <span>Challenges</span>
          </a>
        </li>
        <li>
          <a href="/lessons">
            <div className="logo">
              {LessonsSVG()}
            </div>
            <span>Lessons</span>
          </a>
        </li>
        <li>
          {/* analytics */}
          <a href="/profile">
            <div className="logo">
              {AnalyticsSVG()}
            </div>
            <span>Analytics</span>
          </a>
        </li>
      </ul>

    </nav>


  )
}
