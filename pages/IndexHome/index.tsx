import type { NextPage } from 'next'
import Image from 'next/image'
import Loader from '../../components/loader'
import styles from '../../styles/Home.module.css'
import lockIcon from "../../public/images/lock.png"
import scxFigure from '../../public/images/SCX-MAIN-FIGURES.png'
import scxGif from '../../public/images/SCX-Gif-2.gif'
import { ReactNode, useEffect, useRef, useState } from 'react'
import Link from 'next/link'


const IndexHome: NextPage = () => {
  const [showLoader, setShowLoader] = useState(true)
  const figuresContainerRef = useRef<HTMLDivElement>(null)

  function transformToUrl(url: string) {
    return url.toLowerCase().replaceAll(" ", "-")
  }

  const menuList = [
    {
      title: "CHOOSE YOUR FATE",
      locked: false,
      center: false,
      url: "https://docs.google.com/forms/d/e/1FAIpQLSffBzUOvXOxMQFEmXmfUSMvoxZbVoflzKp7yPZgStBJ5G9eew/viewform",
      outbound: true,
      customIcon: scxGif,
      customClassNames: [styles.gif]
    },
    {
      title: "STORE",
      locked: false,
      center: true,
      outbound: false,
      get url() {
        return transformToUrl(this.title)
      }
    },
    {
      title: "TABULA RASA",
      locked: true,
      center: false,
      outbound: false,
      get url() {
        return "/"
      }
    }
  ]
  const scxFigureElements: ReactNode[] = []

  menuList.forEach((item, index) => {
    scxFigureElements.push(
      <Link href={item.url} key={item.title + index} passHref>
        <a target={item.outbound ? "_blank" : "_self"}
          className={
            `figureContainer 
          ${styles.figureContainer}
          ${item.center ? " " + styles.center : ""}
          ${item.locked ? " " + styles.locked : ""}
          ${item.customClassNames ? " " + item.customClassNames.join(" ") : ""}`
          }>
          <Image layout="fill" objectFit="contain" src={item.locked ? lockIcon : item.customIcon ? item.customIcon : scxFigure} alt="scx figure" />
          <div className={styles.menuTitle}>{item.title}</div>
        </a>
      </Link>
    )
  })

  return (
    <div className={styles.app}>
      {showLoader && <Loader setShowLoader={setShowLoader} />}
      <div className={styles.pageContainer}>
        <div className={styles.figuresContainer} ref={figuresContainerRef}>
          {scxFigureElements}
          <video className={styles.plasmaVideo} src='/video/vid.mp4' autoPlay muted loop playsInline></video>
        </div>
      </div>
    </div>
  )
}

export default IndexHome
