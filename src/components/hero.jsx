import React , {useEffect} from 'react'
import Header from './header'
import {motion, useAnimation, } from 'framer-motion';
import {useInView} from 'react-intersection-observer'

function Hero(heading,text) {
  heading= 'Next generation digital banking'
  text = 'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.'

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  
  const sentence = {
    hidden: {opacity: 1
   },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        ease: "easeInOut",
        delay:"0.5"
    },
  }
  }

  
  const letter = {
    hidden: {opacity: 0, 
              y:20,
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration:1,
        type:"tween",
        ease: "easeInOut",
        //  delay:"0.5"
      }
    },
  }

  const button = {
    hidden: {opacity: 0, 
              y:30,
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        duration:1,
        type:"tween",
        ease: "easeInOut",
       
      }
    },
  }

  function MouseOver(){
    const CTAbutton = document.querySelector(".CTA-btn");
    CTAbutton.style.opacity = "0.7"
  }

  function MouseUp(){
    const CTAbutton = document.querySelector(".CTA-btn");
    CTAbutton.style.opacity = "1"
  }

  

  return (
    <div className='hero'>
       
        <Header/>
        <img src="/assets/images/bg-intro-desktop.svg" alt="desktop intro background" className='desktop-intro-bg'/>
        <div className="hero-img">
            <img src="/assets/images/bg-intro-mobile.svg" alt="mobile intro background" className='mobile-intro-bg'/>
            <img src="/assets/images/image-mockups.png" alt="phone-mockups" className='mockups' />
            
        </div>
    
            <motion.div 
            className="text"
            ref={ref}
            variants={sentence}
            initial='hidden'
            animate={inView ? "visible" : 'hidden'}>
              <h1>
                {
                  heading.split(" ").map((head,index) => (
                    <motion.span
                    className="CTA-text"
                    style={{marginRight:"0.35rem",display:"inline-block"}}
                    key={head + "-" + index}
                    variants={letter}>
                     {head}
                    </motion.span>
                   ))
                }
              </h1>
             
               <p>{text.split(" ").map((word,index) => (
                   <motion.span
                   className="CTA-text"
                   style={{marginRight:"0.2rem",display:"inline-block"}}
                   key={word + "-" +index}
                   variants={letter}>
                    {word}
                   </motion.span>
                  ))}</p>
              <motion.button variants={button} className="CTA-btn" onMouseOver={MouseOver} onMouseOut={MouseUp} >Request Invite</motion.button>
            </motion.div>
        
    </div>
  )
}

export default Hero