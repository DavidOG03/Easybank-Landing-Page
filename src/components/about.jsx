import React , {useEffect} from 'react';
import AnimatedText from './AnimatedText';
import AnimatedHeading from './AnimatedHeading';
import { Card } from './card';
import {motion, useAnimation, } from 'framer-motion';
import {useInView} from 'react-intersection-observer'



function About() {


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
            staggerChildren: 0.02,
            ease: "easeInOut",
           
         },
    }
  }
    
      
  const letter = {
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
            delay:"0.6"
          }
        },
      }

  return (
    <div className='about'>
        <img src="/assets/images/image-mockups.png" alt="phone-mockups" className='about-mockups' />
        <AnimatedHeading heading='Why choose Easybank?' />
        <AnimatedText text='We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.' />

      <motion.div className="services"
        ref={ref}
           variants={sentence}
           initial='hidden'
           animate="visible"
           >
            <Card
            img='/assets/images/icon-online.svg'
            title='Online Banking'
            text='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'/>

            <Card
            img='/assets/images/icon-budgeting.svg'
            title='Simple Budgeting'
            text='See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.'/>

            <Card
            img='/assets/images/icon-onboarding.svg'
            title='Fast Onboarding'
            text='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'/>

            <Card
            img='/assets/images/icon-api.svg'
            title='Open API'
            text=' Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'/>
        </motion.div>
       
    </div>
  )
}

export default About