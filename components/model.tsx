import {motion} from 'framer-motion'
import styles from '../styles/Model.module.css'

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


    return ( 
        <motion.div className={styles.modelContainer} initial={{opacity: 0, scale: 0.7, x: "10%"}} whileInView={{x: 0, opacity: 1, scale: 1, transition:{ duration:1.5, ease: "easeOut"}}}>
            <model-viewer alt={alt} src={src} camera-target="0 -0.5m 0" shadow-intensity="1" camera-controls disable-pan disable-tap disable-zoom touch-action="pan-y">
                <div slot="progress-bar"></div>
            </model-viewer>
        </motion.div>
    );
}
 
export default Model;