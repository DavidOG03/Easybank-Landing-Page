import React , {useEffect} from 'react';
import AnimatedHeading from './AnimatedHeading';
import AnimatedText from './AnimatedText';
import {motion, useAnimation, } from 'framer-motion';
import {useInView} from 'react-intersection-observer';

export const Card = ({
    img,
    title,
    text
}) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

    const letter = {
        hidden: {opacity: 0, 
                  y:30,
                  delay:"0.5"
        },
        visible: {
          opacity: 1,
          y:0,
          transition: {
            duration:1,
            type:"tween",
            ease: "easeInOut",
            delay:"0.5"
          }
        },
      }

    return (
       
        <motion.div className="about-card"
        ref={ref}
        variants={letter}
        animate={inView ? "visible" : "hidden"}>
                {img && <img src={img } className="about-card_image"/>}
                <div className="about-card_info">
                    
                    <AnimatedHeading heading={title} />
                    <AnimatedText text={text}/>
                </div>
        </motion.div>
        
    )
  }