import React , {useEffect} from 'react';
import {motion, useAnimation, } from 'framer-motion';
import {useInView} from 'react-intersection-observer';

export const Articles = ({
    img,
    author,
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
        // <InView triggerOnce threshold={0.5}>
        //   {({ref, inView}) => (
        <motion.div className="article-card"
        ref={ref}
        variants={letter}
        animate={inView ? "visible" : "hidden"}>
                {img && <img src={img } className="article-card_image"/>}
                <div className="article-card_info">
                    {author && <span>{author}</span>}
                    {title && <a href='#'>{title}</a>}
                    
                    {text && <p className='article-card_info'>{text}</p>}
                </div>
        </motion.div>
          // )}
          // </InView>
    )
  }