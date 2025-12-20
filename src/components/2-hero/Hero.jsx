
import  './hero.css'
import Lottie from "lottie-react";
import { useRef, useState, useEffect } from 'react';
import labtopAnimation from '../../animation/labtop.json'
import { motion } from 'framer-motion';


export default function Hero() {
  const lottieRef = useRef();
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Software designer, founder, and amateur astronaut.';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className='hero flex'>
      <div className="hero-background-animated"></div>
   
      <div className='left-section '>
        <div className="parent-avatar flex">
          <motion.img
          initial={{transform:'scale(0)'}}
          animate={{transform:'scale(1.1 )'}}
          transition={{damping: 6 , type:'spring' , stiffness:100}} src="./me.png" className='avatar' alt="" />
          <div className='icon-verified'></div>
        </div>
        <motion.h1
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
         className='title'>{displayedText}<span className="cursor-blink">|</span></motion.h1>
        
        <motion.p 
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.3}}
        className="sub-title">I&apos;m Karim, a software designer and entrepreneur based in New York City. I&apos;m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</motion.p>
        
        <motion.div 
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.5}}
        className="all-icons flex">
          <motion.div 
          whileHover={{scale: 1.2, rotate: 5}}
          whileTap={{scale: 0.9}}
          className="icon icon-x"></motion.div>
          <motion.div 
          whileHover={{scale: 1.2, rotate: 5}}
          whileTap={{scale: 0.9}}
          className="icon icon-instagram"></motion.div>
          <motion.div 
          whileHover={{scale: 1.2, rotate: 5}}
          whileTap={{scale: 0.9}}
          className="icon icon-linkedin-square"></motion.div>
          <motion.div 
          whileHover={{scale: 1.2, rotate: 5}}
          whileTap={{scale: 0.9}}
          className="icon icon-github-square"></motion.div>
        </motion.div>
      </div>

      <div className="right-section animation ">
          <Lottie lottieRef={lottieRef} onLoadedImages={() => {lottieRef.current.setSpeed(.5) }} style={{height:400 , width:400}} animationData={labtopAnimation} /> 
      </div>
    </section>
    
  )
}
