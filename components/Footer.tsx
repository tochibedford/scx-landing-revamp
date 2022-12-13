
import scxLogo from "../public/images/scxLogo.png"

import Link from 'next/link';
import styles from '../styles/Footer.module.css'
import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

const Footer = () => {
    const scxBannerRef = useRef<HTMLDivElement>(null)
    const [positionX, setPositionX] = useState(0.0);

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

        const positionXInterval = setInterval(() => { //animates the scx banner
            if(!document[hiddenAPIName as keyof typeof document]){
                setPositionX(prevPosition => { // will take approximately 17,895 hrs to reach max css value (((2^32)/2)-1) (a signed 32 bit int)
                    return (prevPosition + 100)
                })
            }
        }, 3000)

        return () => {
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
            </div>
            <div className={styles.scxFooterLogo}>
                <Image src={scxLogo} alt="social crucifixion logo" />
            </div>
        </footer>
    );
}

export default Footer;