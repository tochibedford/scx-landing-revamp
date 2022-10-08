import {motion} from 'framer-motion'
import Image from 'next/image';
import styles from '../styles/Model.module.css'
import openInfo from '../public/images/OpenInfo.svg'
import { useContext } from 'react';
import { InfoContext } from './contexts/InfoContext';

interface IModel {
    alt: string
    src: string
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

const Model = ({alt, src}: IModel) => {
  const {setIsInfoOpen} = useContext(InfoContext)

  const handleClick = ()=>{
    setIsInfoOpen(prev=>{
      return !prev
    })
  }
  return ( 
      <motion.div className={styles.modelContainer} initial={{opacity: 0, scale: 0.3, x: "-10%"}} whileInView={{x: 0, opacity: 1, scale: 1, transition:{ duration:0.6, ease: "easeOut"}}} viewport={{once: false, amount:0.5}}>
          <model-viewer alt={alt} src={src} camera-target="0 -0.5m 0" shadow-intensity="1" camera-controls disable-pan disable-tap disable-zoom touch-action="pan-y">
              {/* <div slot="progress-bar"></div> */}
          </model-viewer>
          <motion.div className={styles.openInfo} initial={{opacity:0, x: "20vw"}} whileInView={{x: "0vw", opacity: 1, transition:{ duration: 0.7}}} onClick={handleClick}>
            <Image layout="fill" objectFit="contain" alt="open info button" src={openInfo}/>
          </motion.div>
      </motion.div>
  );
}
 
export default Model;