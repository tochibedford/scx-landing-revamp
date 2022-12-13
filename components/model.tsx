import {motion} from 'framer-motion'
import Image from 'next/image';
import styles from '../styles/Model.module.css'
import openInfo from '../public/images/OpenInfo.svg'
import cartIcon from '../public/images/cart.svg'
import closeInfoIcon from '../public/images/closeInfo.svg'
import { useContext, useEffect, useRef } from 'react';
import { InfoContext } from './contexts/InfoContext';
import { modelInfo } from '../pages/api/models';

interface IModel {
    alt: string
    src: string
    info: modelInfo
}

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'model-viewer': MyElementAttributes;
      }
      interface MyElementAttributes {
        children?: any;
        alt: string;
        src: string;
      }
    }
}

const Model = ({alt, src, info}: IModel) => {
  const modelContainerRef = useRef<HTMLDivElement>(null)
  const {isInfoOpen, setIsInfoOpen} = useContext(InfoContext)
  const handleClick = ()=>{
    setIsInfoOpen(prev=>{
      return !prev
    })
  }

  useEffect(()=>{
    if(window.innerWidth <= 1330){
      if(modelContainerRef.current !== null){
        modelContainerRef.current.style.marginBottom = "130px"
      }
    }
    const handleResize = ()=>{
      if(window.innerWidth <= 1330){
        if(modelContainerRef.current !== null){
          modelContainerRef.current.style.marginBottom = "130px"
        }
      }
    }
    window.addEventListener('resize', handleResize)

    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return ( 
      <motion.div ref={modelContainerRef} className={styles.modelContainer} initial={{opacity: 0, scale: 0.3, x: "-10%"}} whileInView={{x: 0, opacity: 1, scale: 1, transition:{ duration:0.6, ease: "easeOut"}}} viewport={{once: false, amount:0.5}}>
          <model-viewer alt={alt} src={src} camera-target="0 -0.5m 0" shadow-intensity="1" camera-controls disable-pan disable-tap disable-zoom touch-action="pan-y">
          </model-viewer>

          {isInfoOpen===true ? <>
          <div className={`${styles.infoContainer} ${styles.infoContainerRight}`}>
            <div className={styles.titleIcon}>
              <div className={styles.productTitle}>SCX OG HAT</div>
              <div className={styles.cartIcon}> <Image layout="fill" objectFit='contain' alt="cartIcon" src={cartIcon}/> </div>
            </div>
            <div className={styles.price}>XXX.XX</div>
            <div className={styles.productDescription}>
              This stunning hat is ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed adipisci quod earum voluptatum iure pariatur rerum placeat.
            </div>
            <div className={styles.closeInfoContainer} onClick={handleClick}><Image layout='fill' objectFit='contain' alt="close Info" src={closeInfoIcon}/></div>
          </div>
          <div className={`${styles.infoContainer} ${styles.infoContainerBottom}`}>
            <div className={styles.titleIcon}>
              <div className={styles.productTitle}>SCX OG HAT</div>
              <div className={styles.cartIcon}> <Image layout="fill" objectFit='contain' alt="cartIcon" src={cartIcon}/> </div>
            </div>
            <div className={styles.price}>XXX.XX</div>
            <div className={styles.productDescription}>
              This stunning hat is ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed adipisci quod earum voluptatum iure pariatur rerum placeat.
            </div>
            <div className={`${styles.closeInfoContainer} ${styles.closeBottomInfoContainer}`} onClick={handleClick}><Image layout='fill' objectFit='contain' alt="close Info" src={closeInfoIcon}/></div>
          </div>
          </>:
          <>
          <motion.div className={styles.openInfo} initial={{opacity:1}} whileInView={{x: "0vw", opacity: 1, transition:{ duration: 0.7}}} onClick={handleClick}>
            <Image layout="fill" objectFit="contain" alt="open info button" src={openInfo}/>
          </motion.div>
          </>}
      </motion.div>
      
  );
}
 
export default Model;