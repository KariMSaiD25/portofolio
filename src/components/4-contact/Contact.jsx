
import  './contact.css'
import { useForm, ValidationError } from '@formspree/react'
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json'
import messageAnimation from '../../animation/message.json'
import { useRef } from 'react';
export default function Contact() {
   
    const [state, handleSubmit] = useForm("mgvwgreq");
    const lottieRef = useRef();
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us</h1>
        <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dicta laudantium assumenda atque eveniet dolorum fuga vero asperiores non adipisci!</p>
    
      <div className="flex" style={{justifyContent:'space-between'}}>

        <form onSubmit={handleSubmit}  action="" >
      <div className='flex' style={{marginBottom:'1rem'}}> 
           <label htmlFor="email" >Email Address:</label>
          <input autoComplete='off' required type="email" name='email' id='email' />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
          <div className='flex'>
          <label htmlFor="message" >Your message:</label>
          <textarea autoComplete='off' required name="message" id='message'></textarea>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
          <button type="submit" disabled={state.submitting} id='Email' className='submit'>{state.submitting ?'submitting...' :'Submit'}</button>
          {state.succeeded &&<p className='flex' style={{fontSize:'18px' , marginTop:'1.7rem' ,color:'green'}}><Lottie loop={false} style={{height:37}} animationData={doneAnimation} 
        lottieRef={lottieRef}  onLoadedImages={() => {lottieRef.current.setSpeed(5) }} /> Your message has been sent successfully 👌</p>
          }
        </form>
        <div className="animation">
          <Lottie style={{height:400}} animationData={messageAnimation} /> 

        </div>
      </div>   
    </section>
  )
}
