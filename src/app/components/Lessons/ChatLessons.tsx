import React, { useEffect, useState } from 'react'
import styles from './chat.module.scss'
import Image from 'next/image'
import { SendSVG } from '../SVG/SVG'
import Close from '../Close/Close'
import { useRouter } from 'next/navigation'


// const chat = [
//   { id: 99, text: "Victor what is your solution?", avatar: '/img/Anna.png' },
// ]

export default function ChatLessons() {
  const [isOpen, setIsOpen] = useState(false)
  const route = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // setIsOpen(true)
      route.push('/profile')
    }, 10000);
  }, [route])



  return (
    <>
      {/* {!isOpen && ( */}
        <div className={styles.chatLessons}>
          <Close setIsOpenLessons={setIsOpen} />
          <div className={styles.dialogs}>
            <div className={styles.dialog}>
              <div className={styles.messageA}>
                <p>Victor what is your solution?</p>
                <Image width={22} height={22} src={"/img/anna-chat.png"} alt="chat" />
              </div>
              <div className={styles.messageU}>
                <Image className={styles.user} width={22} height={22} src={"/img/user-chat.png"} alt="chat" />
                <p> 9+3-4=0. I moved the bottom left matchstick from the number 8 to the middle of the zero</p>
              </div>
              <div className={styles.messageA}>
                <Image width={22} height={22} src={"/img/anna-chat.png"} alt="chat" />
                <p>
                  You are pretty smart! You earned the next  <span>150</span> points. You have a great chance in the Nike sneakers challenge! Congrats!
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.textArea}>
              <input type="text" placeholder='Your message...' />
              <button className={styles.send}>
                <SendSVG />
              </button>
            </div>
          </form>
        </div>
      {/* )} */}

    </>
  )
}
