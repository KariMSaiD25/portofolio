
import  './Hero.css'
import Lottie from "lottie-react";
import { useRef } from 'react';
import labtopAnimation from '../../animation/labtop.json'
import { motion } from 'framer-motion';


export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className='hero flex'>
   
      <div className='left-section '>
        <div className="parent-avatar flex">
          <motion.img
          initial={{transform:'scale(0)'}}
          animate={{transform:'scale(1.1 )'}}
          transition={{damping: 6 , type:'spring' , stiffness:100}} src="./me.png" className='avatar' alt="" />
          <div className='icon-verified'></div>
        </div>
        <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
         className='title'>Software designer, founder, and amateur astronaut.</motion.h1>
        
        <p className="sub-title">I’m Karim, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
        <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-linkedin-square"></div>
          <div className="icon icon-github-square"></div>
        </div>
      </div>

      <div className="right-section animation ">
    
          <Lottie lottieRef={lottieRef} onLoadedImages={() => {lottieRef.current.setSpeed(.5) }} style={{height:400 , width:400}} animationData={labtopAnimation} /> 

      
      </div>
    </section>
    
  )
}
