import { useForm, ValidationError } from '@formspree/react'
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json'
import messageAnimation from '../../animation/message.json'
import { useRef } from 'react';
export default function Contact() {
   
    const [state, handleSubmit] = useForm("mgvwgreq");
    const lottieRef = useRef();
  return (
    <section>
      <h1 className="text-zinc-100 dark:text-zinc-800 mb-6 text-[2.1rem]">
        <span className="icon-envelope text-gray-400 dark:text-gray-600 mr-4 text-[1.8rem]"> </span>
        Contact us</h1>
        <p className='text-gray-400 dark:text-gray-600 mb-8 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dicta laudantium assumenda atque eveniet dolorum fuga vero asperiores non adipisci!</p>
    
      <div className="flex items-center justify-between">

        <form onSubmit={handleSubmit} className='max-sm:flex max-sm:flex-col max-sm:w-full'>
      <div className='flex items-center mb-4 max-sm:flex-col max-sm:gap-3.5 max-sm:items-start max-sm:justify-center'> 
           <label htmlFor="email" className='text-gray-400 dark:text-gray-600'>Email Address:</label>
          <input autoComplete='off' required type="email" name='email' id='email' className='bg-zinc-700/15 dark:bg-white/[0.162] border border-zinc-700 dark:border-gray-400/45 w-80 py-3.5 px-4 ml-4 rounded-md transition-all duration-300 text-lg dark:text-[#141414ec] dark:shadow-[1px_1px_1px_rgba(73,73,75,0.105)] hover:border-teal-400 focus:border-teal-400 dark:hover:border-gray-700 dark:focus:border-gray-700 max-sm:w-4/5 max-sm:ml-0 max-sm:mb-6' />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
          <div className='flex items-center max-sm:flex-col max-sm:gap-3.5 max-sm:items-start max-sm:justify-center'>
          <label htmlFor="message" className='text-gray-400 dark:text-gray-600'>Your message:</label>
          <textarea autoComplete='off' required name="message" id='message' className='bg-zinc-700/15 dark:bg-white/[0.162] border border-zinc-700 dark:border-gray-400/45 w-80 py-3.5 px-4 ml-4 rounded-md transition-all duration-300 text-lg min-h-36 resize-y dark:text-[#141414ec] dark:shadow-[1px_1px_1px_rgba(73,73,75,0.105)] hover:border-teal-400 focus:border-teal-400 dark:hover:border-gray-700 dark:focus:border-gray-700 max-sm:w-4/5 max-sm:ml-0 max-sm:mb-6'></textarea>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
          <button type="submit" disabled={state.submitting} id='Email' className='bg-[rgb(36,37,46)] dark:bg-[#020202] py-3 px-4 w-24 text-center capitalize opacity-80 rounded-md text-base transition-all duration-300 mt-7 border border-zinc-700 hover:opacity-100 hover:scale-95 max-sm:self-center max-sm:w-28 max-sm:mr-[10%]'>{state.submitting ?'submitting...' :'Submit'}</button>
          {state.succeeded &&<p className='flex items-center text-lg mt-7 text-green-500'><Lottie loop={false} style={{height:37}} animationData={doneAnimation} 
        lottieRef={lottieRef}  onLoadedImages={() => {lottieRef.current.setSpeed(5) }} /> Your message has been sent successfully 👌</p>
          }
        </form>
        <div className="max-xl:hidden">
          <Lottie style={{height:400}} animationData={messageAnimation} /> 

        </div>
      </div>   
    </section>
  )
}
