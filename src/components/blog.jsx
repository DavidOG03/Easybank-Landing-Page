import React from 'react'
import {Articles} from '../components/articles';
import { motion } from "framer-motion";
import AnimatedHeading from './AnimatedHeading';

function Blog() {

    const sentence = {
        hidden: {opacity: 1
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
    
      
      

  return (
    <div className='blog'>
       
        <AnimatedHeading heading="Latest Articles"/>
        <motion.div 
        className="articles"
        variants={sentence}
        initial='hidden'
        animate="visible">
            
            <Articles
            img='/assets/images/image-currency.jpg'
            author='By Claire Robinson'
            title='Receive money in any currency with no fees'
            text='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...'/>
            <Articles
            img='/assets/images/image-restaurant.jpg'
            author='By Wilson Hutton'
            title='Treat yourself without worrying about money'
            text='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...'/>
            <Articles
            img='/assets/images/image-plane.jpg'
            author='By Wilson Hutton'
            title='Take your Easybank card wherever you go'
            text='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...'/>
            <Articles
            img='/assets/images/image-confetti.jpg'
            author='By Claire Robinson'
            title='Our invite-only Beta accounts are now live!'
            text='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'/>
        </motion.div>
    </div>
  )
}

export default Blog