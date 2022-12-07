import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Loader from '../components/loader'
import styles from '../styles/Home.module.css'
import lockIcon from "../public/images/lock.png"
import scxFigure from '../public/images/SCX-MAIN-FIGURES.png'
import { ReactNode, useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  const [showLoader, setShowLoader] = useState(true)
  const figuresContainerRef = useRef<HTMLDivElement>(null)
  
  const locked = [0,2] // use this to set the index of locked menu items
  const menu = ["CHOOSE YOUR FATE", "STORE", "TABULA RASA"]
  const scxFigureElements: ReactNode[] = []

  menu.forEach((item, index)=>{
    if(index != Math.floor((menu.length-1)/2)){ //checks for the center menu item
      scxFigureElements.push(
        <Link href={locked.includes(index)? "":`/${item.toLowerCase().replaceAll(" ", "-")}`} key={item+index}>
          <a className={`figureContainer ${styles.figureContainer} ${locked.includes(index)? styles.locked:""}`}>
            <Image layout="fill" objectFit="contain" src={locked.includes(index)? lockIcon:scxFigure} alt="scx figure" priority={index === 0? true : false } />
            <div className={styles.menuTitle}>{item}</div>
          </a>
        </Link>
      )
    }else{
      scxFigureElements.push(
        <Link href={locked.includes(index)? "":`/${item.toLowerCase().replaceAll(" ", "-")}`} key={item+index}>
          <a className={`figureContainer ${styles.figureContainer} ${styles.center} ${locked.includes(index)? styles.locked:""}`}>
            <Image layout="fill" objectFit="contain" src={locked.includes(index)? lockIcon:scxFigure} alt="scx figure"/>
            <div className={styles.menuTitle}>{item}</div>
          </a>
        </Link>
      )
    }
  })

  return (
    <div className={styles.app}>
      {showLoader && <Loader setShowLoader={setShowLoader}/>}
      <div className={styles.pageContainer}>
        <div className={styles.figuresContainer} ref={figuresContainerRef}>
          {scxFigureElements}
          <video className={styles.plasmaVideo} src='/video/vid.mp4' autoPlay muted loop playsInline></video>
        </div>
      </div>
    </div>
  )
}

export default Home
