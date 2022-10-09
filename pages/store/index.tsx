import styles from '../../styles/Store.module.css'

import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import {motion, useScroll} from 'framer-motion'

import Model from '../../components/model'
import scxLogo from '../../public/images/scxLogo.png'
import { InfoContext } from '../../components/contexts/InfoContext'

const Store: NextPage = () => {
  
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [svgDividerWidth, setsvgDividerWidth] = useState(200);
  const testModel = '/models/scxHatblackWhite.glb'
  const testModel2 = '/models/scxHatnewBlue.glb'
  const testModel3 = '/models/scxHatnewCream.glb'

  const {scrollYProgress} = useScroll()

  const changeSvgWidth = (newWidth: number)=>{
    setsvgDividerWidth(()=>newWidth)
  }

  useEffect(()=>{

    return scrollYProgress.onChange((latest)=>{
      changeSvgWidth(60+(100*(1-parseFloat(latest.toFixed(2))))) // changes the scrollProgress from 0 -> 1 to 1 -> 0 then to 160 -> 100
    })
  }, [scrollYProgress])

  return ( 
    <InfoContext.Provider value={{isInfoOpen: isInfoOpen, setIsInfoOpen: setIsInfoOpen}}>
      <motion.main className={styles.container} animate={{backgroundColor: isInfoOpen===true?"rgba(0,0,0,255)":"rgba(255,255,255,255)"}}>
          <motion.div animate={{ height: "20vh", fontSize: "60px", transition:{ease: "easeInOut",delay: 2}}} className={styles.title}>
            <Link href="/">
              <motion.a className={styles.brand} initial={{opacity: 0, x: 30}} animate={{opacity: 1, x:0, filter: "invert()", mixBlendMode: "exclusion", transition:{delay: 1}}}>
                <Image layout="fill" objectFit="contain" alt="scx brand logo" src={scxLogo}/>
              </motion.a>
            </Link>
            <div className={styles.pageTitle}>
              STORE
            </div>
          </motion.div>
          <motion.div className={styles.modelsContainer}>
            <Model alt="Social Crucifixion Hat" src={testModel} />
            <Model alt="Social Crucifixion Hat" src={testModel2} />
            <Model alt="Social Crucifixion Hat" src={testModel3} />
            <Model alt="Social Crucifixion Hat" src={testModel} />
            <Model alt="Social Crucifixion Hat" src={testModel3} />
          </motion.div>
          <motion.div className={styles.infoPanel} initial={{width: 0}} animate={{width: isInfoOpen===true?"clamp(500px, 50vw, 100%)": 0, transition: {duration: 0.5}}}>
            <div className={styles.customShape} style={{width: `${svgDividerWidth}px`}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2.17 35.28" preserveAspectRatio="none">
                <path d="M1.67 0c-.55 3.07.41 9.27 0 16.14-.4 6.88-.58 13.75.1 19.14h.4V0z" fill="%23fbd8c2"/>
                <path d="M1.16 0c-.8 3.17.4 7.29.56 10.04C1.89 12.8.25 19.3.42 22.71c.16 3.43.84 4.65.86 7.05.03 2.4-.88 5.52-.88 5.52h1.77V0z" opacity=".5"/>
                <path d="M.31 0c.84 2.56.3 7.68.43 11.79.12 4.1.61 6.86.28 9.58-.33 2.73-1.18 5.61-1 8.61.19 3 .82 4.73.84 5.3h1.2V0z" opacity=".5" fill="%23fbd8c2"/>
              </svg>
            </div>
          </motion.div>

          <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      </motion.main>
    </InfoContext.Provider>
  );
}
export default Store;