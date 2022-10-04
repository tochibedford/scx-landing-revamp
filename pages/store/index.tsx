import styles from '../../styles/Store.module.css'
import Script from 'next/script'
import {motion} from 'framer-motion'
import Model from '../../components/model';
import { useEffect} from 'react';

const Store = () => {
  
  const testModel = '/models/scxHatblackWhite.glb'

  return ( 
      <motion.main className={styles.container}>
          <motion.div animate={{ height: "20vh", fontSize: "30px", transition:{ease: "easeInOut",delay: 2}}} className={styles.title}>STORE</motion.div>
          <motion.div className={styles.modelsContainer}>
            <Model alt="Social Crucifixion Hat" src={testModel} />
            <Model alt="Social Crucifixion Hat" src={testModel} />
            <Model alt="Social Crucifixion Hat" src={testModel} />
            <Model alt="Social Crucifixion Hat" src={testModel} />
            <Model alt="Social Crucifixion Hat" src={testModel} />
          </motion.div>

          <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      </motion.main>
  );
}
 
export default Store;