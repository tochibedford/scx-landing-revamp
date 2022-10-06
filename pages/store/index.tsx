import styles from '../../styles/Store.module.css'
import Script from 'next/script'
import {motion} from 'framer-motion'
import Model from '../../components/model';
import { NextPage } from 'next';
import Image from 'next/image';
import scxLogo from '../../public/images/scxLogo.png'
import Link from 'next/link';

const Store: NextPage = () => {
  
  const testModel = '/models/scxHatblackWhite.glb'

  return ( 
      <motion.main className={styles.container}>
          <motion.div animate={{ height: "20vh", fontSize: "60px", transition:{ease: "easeInOut",delay: 2}}} className={styles.title}>
            <Link href="/">
              <motion.a className={styles.brand} initial={{opacity: 0, x: 30}} animate={{opacity: 1, x:0, transition:{delay: 1}}}>
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

          <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      </motion.main>
  );
}
export default Store;