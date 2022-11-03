import scxBanner from '../public/images/scxBanner.png'

import evan from "../public/images/staff/evan.png"
import jarret from "../public/images/staff/jarret.png"
import lauren from "../public/images/staff/lauren.png"
import kudz from "../public/images/staff/kudz.png"
import tochi from "../public/images/staff/tochi.png"
import morgan from "../public/images/staff/morgan.png"
import rachel from "../public/images/staff/rachel.png"
import sylvain from "../public/images/staff/sylvain.png"
import tapz from "../public/images/staff/tapz.png"

import scxLogo from "../public/images/scxLogo.png"

import { motion } from 'framer-motion'

import Link from 'next/link';
import styles from '../styles/Footer.module.css'
import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

const Footer = () => {
    const [currentImages, setCurrentImages] = useState<StaticImageData[] | null>(null)
    const [currentPositions, setCurrentPositions] = useState<[number, number][]>([[0, 0], [0, 0], [0, 0], [0, 0]])
    const scxBannerRef = useRef<HTMLDivElement>(null)
    const [positionX, setPositionX] = useState(0.0);


    const selectRandomStaff = <T,>(staffPaths: T[]): T => {
        const randomIndex = Math.floor(Math.random() * staffPaths.length)
        return staffPaths[randomIndex]
    }

    const selectRandomCoordinateInElement = (htmlNode: HTMLElement, paddingX: number = 0, paddingY: number = 0): [number, number] => {
        const objectHeight = htmlNode.getBoundingClientRect().height / 2
        const objectWidth = htmlNode.getBoundingClientRect().width

        const randomX = Math.floor(Math.random() * (objectWidth - paddingX * 2)) + paddingX //random integer in range (`padding`) to (objectWidth - `padding`) 
        const randomY = Math.floor(Math.random() * (objectHeight - paddingY * 2)) + paddingX //random integer in range (`padding`) to (objectWidth - `padding`) 

        return [randomX, randomY]
    }

    useEffect(() => {
        //page visibility API calls, to pause the moving banner on page exit
        // Set the name of the hidden property and the change event for visibility
        let visibilityChange;
        const hiddenAPIName = (<T,>(document: T & {msHidden?: boolean; webkitHidden?: boolean}) => {
            if (typeof document.msHidden !== "undefined") {
                return "msHidden";
            } else if (typeof document.webkitHidden !== "undefined") {
                return "webkitHidden";
            } else {
                return "hidden"
            }
        })(document)

        const staffImagePaths = [
            evan,
            jarret,
            kudz,
            lauren,
            tochi,
            morgan,
            rachel,
            sylvain,
            tapz
        ]

        const picturePopInterval = setInterval(() => {
            const picked: StaticImageData[] = []
            const positions: [number, number][] = []
            for (let i = 0; i < 4; i++) { // pick 4 random staff
                let chosen: StaticImageData = selectRandomStaff(staffImagePaths)
                while (picked.includes(chosen)) { // keep selecting random values if `chosen` has been picked already
                    chosen = selectRandomStaff(staffImagePaths)
                }
                picked.push(chosen)

                if (scxBannerRef.current) {
                    const [randomX, randomY] = selectRandomCoordinateInElement(scxBannerRef.current)
                    positions.push([randomX, randomY])
                }
            }
            if(!document[hiddenAPIName as keyof typeof document]){ //because hiddenAPI name can be either "hidden", "mshidden" or "webkitHidden" we need to coerce it
                setCurrentImages(picked)
                setCurrentPositions(positions)
            }
        }, 3000)

        const positionXInterval = setInterval(() => { //animates the scx banner
            if(!document[hiddenAPIName as keyof typeof document]){
                setPositionX(prevPosition => { // will take approximately 17,895 hrs to reach max css value (((2^32)/2)-1) (a signed 32 bit int)
                    return (prevPosition + 100)
                })
            }
        }, 3000)

        return () => {
            clearInterval(positionXInterval)
            clearInterval(picturePopInterval)
        }
    }, [positionX])

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerInfoContainer}>
                <div className={styles.email}>
                    <div>
                        Write us an email:
                    </div>
                    <div className={styles.cancelled}>
                        <Link href="mailto: cancelled@socialcrucifix.com">
                            <a >@CANCELLED</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.address}>23, Something Street, <br /> Los Angeles,<br /> California.<br /> United States of America</div>
                <div className={styles.socials}>
                    <div>
                        <Link href="https://twitter.com/socialcrucifix">
                            <a>
                                Twitter
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.instagram.com/socialcrucifixion/">
                            <a>
                                Instagram
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.linkedin.com/company/social-crucifixion">
                            <a>
                                LinkedIn
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.scxBanner} ref={scxBannerRef} style={{ backgroundPositionX: `${positionX}px`, backgroundPositionY: "-150px" }}>
                {currentImages && currentImages.map((value, index) => {
                    return (
                        <motion.div className={styles.bannerPopUp} key={index}
                            style={{ transform: "scale(0.5)", left: `${currentPositions[index][0]}px`, top: `${currentPositions[index][1]}px` }}
                            animate={{
                                transform: `scale(${(0.7 + (Math.random() * 0.2) - (0.7 / 2)).toFixed(2)})`,
                                transition: { duration: 1, ease: "easeOut", repeat: Infinity, repeatDelay: 0.2 }
                            }}
                        >
                            <Image src={value} layout="fill" style={{ transform: "scale(1.3)" }} alt="banner pop up image" />
                        </motion.div>
                    )
                })}

            </div>
            <div className={styles.scxFooterLogo}>
                <Image src={scxLogo} alt="social crucifixion logo" />
            </div>
        </footer>
    );
}

export default Footer;