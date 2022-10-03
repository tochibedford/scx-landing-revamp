import Image from 'next/image';
import styles from '../styles/Loader.module.css'
import logo from '../public/images/scxLogo.png'
import { useLayoutEffect, useRef } from 'react';
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if(typeof window !== undefined){
    gsap.registerPlugin(ScrollTrigger)
}

interface IProps {
    setShowLoader: (loaderState: boolean)=>void
}

const Loader: React.FC<IProps> = ({setShowLoader}) => {
    const el = useRef(null)
    const gsapQuerySelector = gsap.utils.selector(el)
    
    useLayoutEffect(()=>{
        
        let tl = gsap.timeline({onComplete: ()=>{setShowLoader(false)}})
        let from = tl.from(gsapQuerySelector('.logoContainer'), {
            y: -100,
            opacity: 0,
            duration: 0.5,
            immediateRender: false
        }).to(gsapQuerySelector('.staggerLetter'), {
            x: 20,
            stagger: 0.08,
            opacity: 1,
            duration: 1,
            immediateRender: false
        }).to(el.current, {
            y: "-100%",
            duration: 1.3,
        }, 2).to(gsapQuerySelector(".staggerLetter"), {
            y: "60%",
            stagger: 0.08,
            duration: 1
        }, "-=1.3").to(gsapQuerySelector(".staggerLetter"),{
            y: "-60%",
            duration: 0.2
        })

        return ()=>{
            from.kill()
        }
    })

    return ( 
        <div className={styles.container} ref={el}>
            <div className={`logoContainer ${styles.logoContainer}`}>
                <Image className={styles.logo} src={logo} alt="scx logo" />
            </div>
            <div className={styles.bottomText}>
                <div className={`staggerLetter ${styles.staggerLetter}`}>S</div>
                <div className={`staggerLetter ${styles.staggerLetter}`}>C</div>
                <div className={`staggerLetter ${styles.staggerLetter}`}>X</div>
            </div>
        </div> 
    );
}
 
export default Loader;