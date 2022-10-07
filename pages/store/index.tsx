import styles from '../../styles/Store.module.css'
import Script from 'next/script'
import {motion} from 'framer-motion'
import Model from '../../components/model'
import { NextPage } from 'next'
import Image from 'next/image'
import scxLogo from '../../public/images/scxLogo.png'
import Link from 'next/link'
import { useState } from 'react'
import { InfoContext } from '../../components/contexts/InfoContext'

const Store: NextPage = () => {
  
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const testModel = '/models/scxHatblackWhite.glb'

  return ( 
    <InfoContext.Provider value={{setIsInfoOpen: setIsInfoOpen}}>
      <motion.main className={styles.container} animate={{backgroundColor: isInfoOpen===true?"black":"white"}}>
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
            <Model alt="Social Crucifixion Hat" src={testModel} />
            <Model alt="Social Crucifixion Hat" src={testModel} />
            <Model alt="Social Crucifixion Hat" src={testModel} />
            <Model alt="Social Crucifixion Hat" src={testModel} />
          </motion.div>
          <motion.div className={styles.infoPanel} initial={{width: 0}} animate={{width: isInfoOpen===true?"clamp(500px, 50vw, 100%)": 0, transition: {duration: 0.5}}}>
          </motion.div>

          <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      </motion.main>
    </InfoContext.Provider>
  );
}
export default Store;