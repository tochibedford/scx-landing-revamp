import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {motion, AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.5
          }
        },
        pageExit: {
          filter: "blur(40px)",
          opacity: 0.1,
          transition: {
            ease: "easeInOut",
            duration: 0.25
          }
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
