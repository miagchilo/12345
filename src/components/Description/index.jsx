import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
export default function index() {

    const phrase = "Brining your bussines online. Increase sales thru digital upgarde.  ";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Design and Development </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <div className={styles.button}>
                        <p>About me</p>
                    </div>
                </div>
            </div>
        </div>
    )
}