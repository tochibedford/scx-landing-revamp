import scxBanner from '../public/images/scxBanner.png'

import Link from 'next/link';
import styles from '../styles/Footer.module.css'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
    const scxBannerRef = useRef<HTMLDivElement>(null)
    const [positionX, setPositionX] = useState(0.0);

    const staffImagePaths = [
        "../public/images/staff/evan.png",
        "../public/images/staff/jarret.png",
        "../public/images/staff/kudz.png",
        "../public/images/staff/lauren.png",
        "../public/images/staff/tochi.png",
        "../public/images/staff/morgan.png",
        "../public/images/staff/rachel.png",
        "../public/images/staff/sylvain.png",
        "../public/images/staff/tapz.png",
    ]

    const selectRandomStaff = (staffPaths: string[]): string=>{
        const randomIndex = Math.floor(Math.random()*staffPaths.length)
        return staffPaths[randomIndex]
    }

    useEffect(()=>{
        selectRandomStaff(staffImagePaths)
        const positionXInterval = setInterval(()=>{ //animates the scx banner
            setPositionX(prevPosition=>{ // will take approximately 11,930 hrs to reach max css value (((2^32)/2)-1) (a signed 32 bit int)
                return (prevPosition + 10)
            })
        }, 200)
        
        return ()=>{
            clearInterval(positionXInterval)
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
            <div className={styles.scxBanner} style={{backgroundPositionX: `${positionX}px`, backgroundPositionY: "-150px"}}>
            </div>
        </footer>
    );
}

export default Footer;