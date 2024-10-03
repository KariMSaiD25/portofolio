
import './header.css'
import { useEffect, useState } from 'react'

export default function header() {
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
    <header className='flex'>

      <button onClick={() => { setShowModal(true) }} className='menu icon-menu' />
    
      <div/> 

      <nav>
         <ul className='flex'>
            <li><a href="">about</a></li>
            <li><a href="">articles</a></li>
            <li><a href="">projects</a></li>
            <li><a href="">speaking</a></li>
            <li><a href="">contact</a></li>
          </ul>
      </nav> 

      <button onClick={() => {
                localStorage.setItem('currentMode' , theme==='dark'?'light':'dark')
                setTheme(localStorage.getItem('currentMode'))
               
       }} className='icon-moon  theme'/ >
      
      {showModal && (
        <div className='fixed'>
        <ul className="modal">
          <li> <button className='icon-close' onClick={() => { setShowModal(false) }}/> </li>
          <li><a href="">about</a></li>
          <li><a href="">articles</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">speaking</a></li>
          <li><a href="">contact</a></li>
        </ul>  
      </div>
      )
    }
      
  </header>


  )
}
