import { useEffect, useState } from 'react'

export default function Header() {
  const [showModal , setShowModal] = useState(false); 

  const [theme , setTheme] = useState(localStorage.getItem('currentMode')??'dark');
  useEffect(() => { 
    if(theme==='dark') {
      document.body.classList.remove('dark')
        document.body.classList.add('light')
      const theme = document.querySelector('.theme')
      theme.classList.add('icon-sun')
      theme.classList.remove('icon-moon')
    
    }else
    { 
       document.body.classList.remove('light')
      document.body.classList.add('dark')
      const theme = document.querySelector('.theme')
      theme.classList.remove('icon-sun')
      theme.classList.add('icon-moon')
    
    }
  }
  , [theme])  


  return (
    <header className='flex items-center justify-between px-10 mt-5'>

      <button 
        onClick={() => { setShowModal(true) }} 
        className='menu icon-menu hidden max-md:block bg-zinc-800 dark:bg-zinc-50 h-8 w-8 rounded-full p-2 text-gray-400 dark:text-gray-600 transition-all duration-200 text-center shadow-lg border border-orange-500/20 hover:border-orange-500' 
      />
    
      <div/> 

      <nav className='bg-zinc-800 dark:bg-[#fdfdfc] px-8 py-4 rounded-[55px] shadow-[4px_4px_40px_rgba(35,33,33,0.3)] mr-2 max-md:hidden'>
         <ul className='flex items-center gap-4'>
            <li><a href="" className='text-zinc-100 dark:text-zinc-800 opacity-90 text-sm font-medium hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 hover:text-[0.92rem] transition-all duration-200'>about</a></li>
            <li><a href="" className='text-zinc-100 dark:text-zinc-800 opacity-90 text-sm font-medium hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 hover:text-[0.92rem] transition-all duration-200'>articles</a></li>
            <li><a href="" className='text-zinc-100 dark:text-zinc-800 opacity-90 text-sm font-medium hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 hover:text-[0.92rem] transition-all duration-200'>projects</a></li>
            <li><a href="" className='text-zinc-100 dark:text-zinc-800 opacity-90 text-sm font-medium hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 hover:text-[0.92rem] transition-all duration-200'>speaking</a></li>
            <li><a href="" className='text-zinc-100 dark:text-zinc-800 opacity-90 text-sm font-medium hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 hover:text-[0.92rem] transition-all duration-200'>contact</a></li>
          </ul>
      </nav> 

      <button 
        onClick={() => {
          localStorage.setItem('currentMode' , theme==='dark'?'light':'dark')
          setTheme(localStorage.getItem('currentMode'))
        }} 
        className='icon-moon theme bg-zinc-800 dark:bg-zinc-50 h-8 w-8 rounded-full p-2 text-gray-400 dark:text-orange-500 transition-all duration-200 text-center shadow-lg border border-orange-500/20 hover:border-orange-500'
      />
      
      {showModal && (
        <div className='fixed inset-0 bg-[rgb(40,40,48)]/91 z-[11] backdrop-blur-sm'>
          <ul className="w-3/4 mx-auto mt-8 bg-secondary-dark dark:bg-secondary-light rounded-2xl p-4 px-8 animate-modal-appear">
            <li className='text-right border-none pt-2 pb-3 -mb-8'> 
              <button 
                className='icon-close text-gray-400 dark:text-gray-600 text-2xl transition-all duration-300 hover:text-red-600 hover:text-[1.6rem] hover:rotate-180' 
                onClick={() => { setShowModal(false) }}
              /> 
            </li>
            <li className='border-b border-border-dark dark:border-border-light mx-3 py-2 my-3'><a href="" className='text-base text-zinc-100 dark:text-zinc-800 opacity-90 hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 transition-all duration-200'>about</a></li>
            <li className='border-b border-border-dark dark:border-border-light mx-3 py-2 my-3'><a href="" className='text-base text-zinc-100 dark:text-zinc-800 opacity-90 hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 transition-all duration-200'>articles</a></li>
            <li className='border-b border-border-dark dark:border-border-light mx-3 py-2 my-3'><a href="" className='text-base text-zinc-100 dark:text-zinc-800 opacity-90 hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 transition-all duration-200'>projects</a></li>
            <li className='border-b border-border-dark dark:border-border-light mx-3 py-2 my-3'><a href="" className='text-base text-zinc-100 dark:text-zinc-800 opacity-90 hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 transition-all duration-200'>speaking</a></li>
            <li className='mx-3 py-2 my-3'><a href="" className='text-base text-zinc-100 dark:text-zinc-800 opacity-90 hover:text-accent-blue dark:hover:text-accent-blue-light hover:opacity-100 transition-all duration-200'>contact</a></li>
          </ul>  
        </div>
      )
    }
      
  </header>


  )
}
