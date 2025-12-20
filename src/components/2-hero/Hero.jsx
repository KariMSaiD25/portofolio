import Lottie from "lottie-react";
import { useRef, useState, useEffect } from 'react';
import labtopAnimation from '../../animation/labtop.json'
import { motion } from 'framer-motion';

const HERO_TITLE = 'Software designer, founder, and amateur astronaut.';
const TYPING_SPEED_MS = 50;

export default function Hero() {
  const lottieRef = useRef();
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= HERO_TITLE.length) {
        setDisplayedText(HERO_TITLE.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, TYPING_SPEED_MS);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className='flex items-center mt-12 relative overflow-hidden'>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent-blue/5 via-accent-orange/5 via-accent-purple/5 to-accent-cyan/5 bg-[length:400%_400%] animate-gradient-shift pointer-events-none"></div>
   
      <div className='flex-grow min-h-auto relative z-10'>
        <div className="flex items-end gap-3.5">
          <motion.img
          initial={{transform:'scale(0)'}}
          animate={{transform:'scale(1.1 )'}}
          transition={{damping: 6 , type:'spring' , stiffness:100}} 
          src="./me.png" 
          className='w-[88px] rounded-full border border-orange-600 p-0.5 shadow-[2px_2px_40px_rgba(255,255,255,0.258)_inset,2px_2px_40px_rgba(222,246,7,0.322)]' 
          alt="" 
          />
          <div className='icon-verified text-accent-blue mb-2'></div>
        </div>
        <motion.h1
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
         className='my-8 text-5xl leading-[3.7rem] text-zinc-100 dark:text-zinc-800'>{displayedText}<span className="animate-cursor-blink text-accent-blue dark:text-accent-blue-light font-light">|</span></motion.h1>
        
        <motion.p 
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.3}}
        className="text-gray-400 dark:text-gray-600 leading-6 mb-5">I&apos;m Karim, a software designer and entrepreneur based in New York City. I&apos;m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</motion.p>
        
        <motion.div 
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.5}}
        className="flex items-center gap-5 text-gray-400 dark:text-gray-600 text-xl">
          <motion.div 
          whileHover={{scale: 1.2, rotate: 5}}
          whileTap={{scale: 0.9}}
          className="icon icon-x cursor-pointer transition-all duration-300 hover:text-gray-300 dark:hover:text-gray-800 hover:drop-shadow-[0_0_8px_rgba(93,188,252,0.6)]"></motion.div>
          <motion.div 
          whileHover={{scale: 1.2, rotate: 5}}
          whileTap={{scale: 0.9}}
          className="icon icon-instagram cursor-pointer transition-all duration-300 hover:text-gray-300 dark:hover:text-gray-800 hover:drop-shadow-[0_0_8px_rgba(93,188,252,0.6)]"></motion.div>
          <motion.div 
          whileHover={{scale: 1.2, rotate: 5}}
          whileTap={{scale: 0.9}}
          className="icon icon-linkedin-square cursor-pointer transition-all duration-300 hover:text-gray-300 dark:hover:text-gray-800 hover:drop-shadow-[0_0_8px_rgba(93,188,252,0.6)]"></motion.div>
          <motion.div 
          whileHover={{scale: 1.2, rotate: 5}}
          whileTap={{scale: 0.9}}
          className="icon icon-github-square cursor-pointer transition-all duration-300 hover:text-gray-300 dark:hover:text-gray-800 hover:drop-shadow-[0_0_8px_rgba(93,188,252,0.6)]"></motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 translate-x-14 translate-y-10 scale-125 max-xl:hidden">
          <Lottie lottieRef={lottieRef} onLoadedImages={() => {lottieRef.current.setSpeed(.5) }} style={{height:400 , width:400}} animationData={labtopAnimation} /> 
      </div>
    </section>
    
  )
}
