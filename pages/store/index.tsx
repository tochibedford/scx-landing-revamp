import styles from '../../styles/Store.module.css'
// import '@google/model-viewer'
import Script from 'next/script'

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'model-viewer': MyElementAttributes;
      }
      interface MyElementAttributes {
        alt: string;
        src: string;
      }
    }
  }
  

const Store = () => {
    return ( 
        <>
            {/* <div className={styles.genericTitle}>STORE</div> */}

            <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src='/models/scxHatblackWhite.glb' shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
            <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
        </>
    );
}
 
export default Store;