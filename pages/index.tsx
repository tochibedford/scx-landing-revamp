import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Loader from '../components/loader'
import styles from '../styles/Home.module.css'
import lockIcon from "../public/images/lock.png"
import scxFigure from '../public/images/SCX-MAIN-FIGURES.png'
import { ReactNode, useState } from 'react'

const Home: NextPage = () => {
  const [showLoader, setShowLoader] = useState(true)
  const locked = [0,2]
  const menu = ["CHOOSE YOUR FATE", "STORE", "TABULA RASA"]
  const scxFigureElements: ReactNode[] = []
  menu.forEach((item, index)=>{
    if(index != Math.floor((menu.length-1)/2)){
      scxFigureElements.push(
        <div className={`figureContainer ${styles.figureContainer}`}>
          <Image layout="fill" objectFit="contain" src={scxFigure} alt="scx figure" priority={index === 0? true : false } key={item+index}/>
          <div className={styles.menuTitle}>
            {item}
          </div>
        </div>
      )
    }else{
      scxFigureElements.push(
        <div className={`figureContainer ${styles.figureContainer} ${styles.center}`} key={item+index}>
          <Image layout="fill" objectFit="contain" src={scxFigure} alt="scx figure"/>
          <div className={styles.menuTitle}>{item}</div>
        </div>
      )
    }
  })

  return (
    <div className={styles.app}>
      {showLoader && <Loader setShowLoader={setShowLoader}/>}
      <div className={styles.pageContainer}>
        <div className={styles.figuresContainer}>
          {scxFigureElements}
          <video className={styles.plasmaVideo} src='/video/vid.mp4' autoPlay muted loop></video>
        </div>
      </div>
    </div>
  )
}

export default Home
