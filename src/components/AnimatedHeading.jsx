import React , {useEffect} from 'react'
import {motion, useAnimation, } from 'framer-motion';
import {useInView} from 'react-intersection-observer'


const AnimatedHeading = ({heading}) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);


    const sentence = {
        hidden: {opacity: 1,
           
        },
         visible: {
           opacity: 1,
          
           transition: {
             staggerChildren: 0.015,
             ease: "easeInOut",
             delay:"0.4"
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
      ease:  "easeInOut",
      
    }
        },
      }
      
  
    return (
      <>
       
      <motion.div
      ref={ref}
      variants={sentence}
      initial='hidden'
      animate={inView ? "visible" : 'hidden'}>

        <div className="about-heading-box">
        {heading.split(" ").map((word,index) => (
                     <motion.span
                     className="about-heading"
                     key={index}
                     variants={letter}>
                      {word}
                     </motion.span>
                    ))}
        </div>
      </motion.div>
       
      </>
     
    )
};

export default AnimatedHeading