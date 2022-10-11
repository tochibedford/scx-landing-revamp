import scxBanner from '../public/images/scxBanner.png'

import { motion } from 'framer-motion'

import Link from 'next/link';
import styles from '../styles/Footer.module.css'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Footer = () => {
    const [currentImages, setCurrentImages] = useState<string[]|null>(null)
    const [currentPositions, setCurrentPositions] = useState<[number, number][]>([[0,0],[0,0],[0,0],[0,0]])
    const scxBannerRef = useRef<HTMLDivElement>(null)
    const [positionX, setPositionX] = useState(0.0);

    
    const selectRandomStaff = (staffPaths: string[]): string=>{
        const randomIndex = Math.floor(Math.random()*staffPaths.length)
        return staffPaths[randomIndex]
    }

    const selectRandomCoordinateInElement = (htmlNode: HTMLElement, paddingX: number=0, paddingY: number=0): [number, number]=>{
        const objectHeight = htmlNode.getBoundingClientRect().height/2
        const objectWidth = htmlNode.getBoundingClientRect().width
        
        const randomX = Math.floor(Math.random()*(objectWidth - paddingX*2)) + paddingX //random integer in range (`padding`) to (objectWidth - `padding`) 
        const randomY = Math.floor(Math.random()*(objectHeight - paddingY*2)) + paddingX //random integer in range (`padding`) to (objectWidth - `padding`) 

        return [randomX, randomY]
    }

    useEffect(()=>{
        const staffImagePaths = [
            "/../public/images/staff/evan.png",
            "/../public/images/staff/jarret.png",
            "/../public/images/staff/kudz.png",
            "/../public/images/staff/lauren.png",
            "/../public/images/staff/tochi.png",
            "/../public/images/staff/morgan.png",
            "/../public/images/staff/rachel.png",
            "/../public/images/staff/sylvain.png",
            "/../public/images/staff/tapz.png",
        ]
        
        const picturePopInterval = setInterval(()=>{
            const picked: string[] = []
            const positions: [number, number][] = []
            for(let i=0; i<4; i++){ // pick 4 random staff
                let chosen = selectRandomStaff(staffImagePaths) 
                while(picked.includes(chosen)) { // keep selecting random values if `chosen` has been picked already
                    chosen = selectRandomStaff(staffImagePaths)
                }
                picked.push(chosen)
                
                if(scxBannerRef.current){
                    const [randomX, randomY] = selectRandomCoordinateInElement(scxBannerRef.current)
                    positions.push([randomX, randomY])
                }
            }
            // console.log(positions)
            setCurrentImages(picked)
            setCurrentPositions(positions)
        }, 3000)

        const positionXInterval = setInterval(()=>{ //animates the scx banner
            setPositionX(prevPosition=>{ // will take approximately 17,895 hrs to reach max css value (((2^32)/2)-1) (a signed 32 bit int)
                return (prevPosition + 100)
            })
        }, 3000)
        
        return ()=>{
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
                    <Link href="mailto: cancelled@socialcrucifix.com">
                        <a>@CANCELLED</a>
                    </Link>
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
            <div className={styles.scxBanner} ref={scxBannerRef} style={{backgroundPositionX: `${positionX}px`, backgroundPositionY: "-150px"}}>
                {currentImages && currentImages.map((value, index)=>{
                    return (
                    <motion.div className={styles.bannerPopUp} key={index}
                        style={{left:`${currentPositions[index][0]}px`, top:`${currentPositions[index][1]}px`}}
                        animate={{opacity: [null, 0.8, 0], scale: (0.7+(Math.random()*1)-(0.7/2)).toFixed(2),
                        transition:{duration: 0.7+(index*0.2), ease: "easeInOut", repeat: Infinity, repeatDelay: 2}}} 
                        >
                        <Image src={value} layout="fill" style={{transform: "scale(1.3)"}} alt="banner pop up image"/>
                    </motion.div>
                    )
                })}
                
            </div>
        </footer>
    );
}

export default Footer;