import { useState } from  'react'                                   
import Header  from       './components/1-header/Header'          
import Hero    from       './components/2-hero/Hero'              
import Main    from       './components/3-main/Main'                            
import Contact from       './components/4-contact/Contact'       
import Footer  from       './components/5-footer/Footer'                   
import { useEffect } from 'react'
     
function App() {
useEffect(() => { 
  window.addEventListener('scroll', () => { 
    window.scrollY >300 ?setShowScrollBtn(true) :setShowScrollBtn(false);
   })
 },[])
const [showScrollBtn , setShowScrollBtn] =useState(false);
  return (
    <div id='up' className='container'>
      <Header/>
    
      <Hero/> 
      <div className="divider"/>

      <Main/>
      <div className="divider"/>

      <Contact/>
      <div className="divider"/>
      <Footer/>
      

      

    
      <a href="#up" style={{opacity: showScrollBtn? 1:0 , transition: "1s" }}>
            <button className="icon-keyboard_arrow_up  scroll2Top"></button>
      </a>
        
    </div>
  )

}

export default App
