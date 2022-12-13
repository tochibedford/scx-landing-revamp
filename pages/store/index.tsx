import styles from '../../styles/Store.module.css'

import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { motion } from 'framer-motion'

import { modelInfo, Data } from "../api/models"
import Model from '../../components/model'
import scxLogo from '../../public/images/scxLogo.png'
import { InfoContext } from '../../components/contexts/InfoContext'
import Footer from '../../components/Footer'

const Store: NextPage = () => {
  // const [modelsInfos, setModelInfos] = useState<modelInfo[] | null>(null)
  
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [svgDividerWidth, setsvgDividerWidth] = useState(200);
  const testModel = '/models/scxHatblackWhite.glb'
  const testModel2 = '/models/scxHatnewBlue.glb'
  const testModel3 = '/models/scxHatnewCream.glb'
  
  const modelsInfos: modelInfo[] = [
    {
      name: "Intersections",
      url: testModel,
      colors: ["Black", "White"],
      description: "Black and White, Light and Dark cease to exist without each other. It is only at their intersection that color is born. The SCX &#39;Intersections&#39; design represents rebirth.",
      otherInfo: ["Front Panels: 100% Cotton Twill", "Mid and Back Panels: 100% Polyester Mesh", "Snapback: 7 Position Adjustable"]
    },
    {
      name: "Day and Night",
      url: testModel2,
      colors: ["Blue", "Yellow"],
      description: "Through light and dark, we experience day and night. The blues are born out of darkness, with the help of light. Yellow is born out of the light, with the help of the dark. The SCX &#39;Day and Night&#39; design represents balance.",
      otherInfo: ["Front Panels: 100% Cotton Twill", "Mid and Back Panels: 100% Polyester Mesh", "Snapback: 7 Position Adjustable"]
    },
    {
      name: "Earth",
      url: testModel3,
      colors: ["Beige"],
      description: "A picture comes into being in the encounter of light and dark, and the earth comes to us in the shape of pictures. The SCX &#39;Earth&#39; design represents seeing the bigger picture through your roots.",
      otherInfo: ["Front Panels: 100% Cotton Twill", "Mid and Back Panels: 100% Polyester Mesh", "Snapback: 7 Position Adjustable"]
    },

  ]

  return (
    <InfoContext.Provider value={{ isInfoOpen: isInfoOpen, setIsInfoOpen: setIsInfoOpen }}>
      <motion.main className={styles.container} animate={{ backgroundColor: isInfoOpen === true ? "rgba(0,0,0,255)" : "rgba(255,255,255,255)" }}>
        <motion.div animate={{ height: "20vh", fontSize: "45px", transition: { ease: "easeInOut", delay: 2 } }} className={styles.title}>
          <Link href="/">
            <motion.a className={styles.brand} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0, filter: "invert()", mixBlendMode: "exclusion", transition: { delay: 1 } }}>
              <Image layout="fill" objectFit="contain" alt="scx brand logo" src={scxLogo} />
            </motion.a>
          </Link>
          <div className={styles.pageTitle}>
            STORE
          </div>
        </motion.div>
        <motion.div className={styles.modelsContainer}>
          {modelsInfos.map((item, index)=>{
            return <Model alt="Social Crucifixion Hat" key={index + Math.random()} src={item.url} info={item} />
          })}
        </motion.div>
        <motion.div className={styles.infoPanel} initial={{ width: 0 }} animate={{ width: isInfoOpen === true ? "clamp(500px, 50vw, 100%)" : 0, transition: { duration: 0.5 } }}>
          <div className={styles.customShape} style={{ width: `${svgDividerWidth}px` }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2.17 35.28" preserveAspectRatio="none">
              <path d="M1.67 0c-.55 3.07.41 9.27 0 16.14-.4 6.88-.58 13.75.1 19.14h.4V0z" fill="%23fbd8c2" />
              <path d="M1.16 0c-.8 3.17.4 7.29.56 10.04C1.89 12.8.25 19.3.42 22.71c.16 3.43.84 4.65.86 7.05.03 2.4-.88 5.52-.88 5.52h1.77V0z" opacity=".5" />
              <path d="M.31 0c.84 2.56.3 7.68.43 11.79.12 4.1.61 6.86.28 9.58-.33 2.73-1.18 5.61-1 8.61.19 3 .82 4.73.84 5.3h1.2V0z" opacity=".5" fill="%23fbd8c2" />
            </svg>
          </div>
        </motion.div>
        <div className={styles.wavesContainer}>
          <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
              <motion.path opacity={0.5} d="M0 470L11.5 471C23 472 46 474 69 477.5C92 481 115 486 138.2 489.3C161.3 492.7 184.7 494.3 207.8 496.2C231 498 254 500 277 500.7C300 501.3 323 500.7 346 498.5C369 496.3 392 492.7 415.2 488.5C438.3 484.3 461.7 479.7 484.8 477.2C508 474.7 531 474.3 554 473.7C577 473 600 472 623 470.8C646 469.7 669 468.3 692.2 471C715.3 473.7 738.7 480.3 761.8 483.2C785 486 808 485 831 485.3C854 485.7 877 487.3 888.5 488.2L900 489L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z" 
                  animate={{d:"M0 475L11.5 480.5C23 486 46 497 69 497.2C92 497.3 115 486.7 138.2 482.2C161.3 477.7 184.7 479.3 207.8 479.8C231 480.3 254 479.7 277 478.3C300 477 323 475 346 477.5C369 480 392 487 415.2 490.7C438.3 494.3 461.7 494.7 484.8 495.5C508 496.3 531 497.7 554 496.8C577 496 600 493 623 490.2C646 487.3 669 484.7 692.2 481.5C715.3 478.3 738.7 474.7 761.8 478.7C785 482.7 808 494.3 831 493.7C854 493 877 480 888.5 473.5L900 467L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z", 
                  transition: {duration: 2, repeat: Infinity, repeatType: "reverse",ease: "easeInOut"}}} fill="#787878">
              </motion.path>
              <motion.path opacity={0.5} d="M0 512L11.5 509.5C23 507 46 502 69 499.8C92 497.7 115 498.3 138.2 500.5C161.3 502.7 184.7 506.3 207.8 506C231 505.7 254 501.3 277 499.8C300 498.3 323 499.7 346 502C369 504.3 392 507.7 415.2 510C438.3 512.3 461.7 513.7 484.8 512C508 510.3 531 505.7 554 503.3C577 501 600 501 623 500.5C646 500 669 499 692.2 500.3C715.3 501.7 738.7 505.3 761.8 509.8C785 514.3 808 519.7 831 523C854 526.3 877 527.7 888.5 528.3L900 529L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z" 
                  animate={{d:"M0 504L11.5 506.8C23 509.7 46 515.3 69 519.3C92 523.3 115 525.7 138.2 526.8C161.3 528 184.7 528 207.8 526.8C231 525.7 254 523.3 277 521C300 518.7 323 516.3 346 513.7C369 511 392 508 415.2 506.8C438.3 505.7 461.7 506.3 484.8 510.2C508 514 531 521 554 522.5C577 524 600 520 623 514.8C646 509.7 669 503.3 692.2 504.2C715.3 505 738.7 513 761.8 517.5C785 522 808 523 831 522.2C854 521.3 877 518.7 888.5 517.3L900 516L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z", 
                  transition: {duration: 2, repeat: Infinity, repeatType: "reverse",ease: "easeInOut"}}} fill="#4f4f4f" >
              </motion.path>
              <motion.path opacity={0.5} d="M0 546L11.5 545.3C23 544.7 46 543.3 69 541.5C92 539.7 115 537.3 138.2 534.3C161.3 531.3 184.7 527.7 207.8 526.2C231 524.7 254 525.3 277 526.8C300 528.3 323 530.7 346 534.3C369 538 392 543 415.2 542.3C438.3 541.7 461.7 535.3 484.8 535.3C508 535.3 531 541.7 554 542.7C577 543.7 600 539.3 623 539.2C646 539 669 543 692.2 545.2C715.3 547.3 738.7 547.7 761.8 548C785 548.3 808 548.7 831 544.8C854 541 877 533 888.5 529L900 525L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z" 
                  animate={{d:"M0 527L11.5 530.3C23 533.7 46 540.3 69 543.5C92 546.7 115 546.3 138.2 544.3C161.3 542.3 184.7 538.7 207.8 537.8C231 537 254 539 277 538.5C300 538 323 535 346 532.8C369 530.7 392 529.3 415.2 528.7C438.3 528 461.7 528 484.8 530C508 532 531 536 554 535.5C577 535 600 530 623 529.8C646 529.7 669 534.3 692.2 536.5C715.3 538.7 738.7 538.3 761.8 540C785 541.7 808 545.3 831 546.8C854 548.3 877 547.7 888.5 547.3L900 547L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z", 
                  transition: {duration: 2, repeat: Infinity, repeatType: "reverse",ease: "easeInOut"}}} fill="#2a2a2a">
              </motion.path>
              <motion.path opacity={0.6} d="M0 573L11.5 570.5C23 568 46 563 69 561.2C92 559.3 115 560.7 138.2 560.7C161.3 560.7 184.7 559.3 207.8 559.2C231 559 254 560 277 560.7C300 561.3 323 561.7 346 560.7C369 559.7 392 557.3 415.2 557C438.3 556.7 461.7 558.3 484.8 559.7C508 561 531 562 554 563.5C577 565 600 567 623 565.5C646 564 669 559 692.2 559C715.3 559 738.7 564 761.8 564.8C785 565.7 808 562.3 831 560C854 557.7 877 556.3 888.5 555.7L900 555L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z" 
                  animate={{d:"M0 557L11.5 558.3C23 559.7 46 562.3 69 562.8C92 563.3 115 561.7 138.2 562.8C161.3 564 184.7 568 207.8 568.8C231 569.7 254 567.3 277 564.7C300 562 323 559 346 558.5C369 558 392 560 415.2 562.5C438.3 565 461.7 568 484.8 569.2C508 570.3 531 569.7 554 569.3C577 569 600 569 623 567.5C646 566 669 563 692.2 561.5C715.3 560 738.7 560 761.8 560.3C785 560.7 808 561.3 831 562.7C854 564 877 566 888.5 567L900 568L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z", 
                  transition: {duration: 2, repeat: Infinity, repeatType: "reverse",ease: "easeInOut"}}} fill="#000000">    
              </motion.path>
          </svg>
        </div>
      </motion.main>
      <Footer />

      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
    </InfoContext.Provider>
  );
}
export default Store;