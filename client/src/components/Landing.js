// import { Button } from '@mantine/core';
import {motion, MotionConfig} from "framer-motion";
import { useState } from "react";

const Landing = (props) => {
  
  return <>
  <MotionConfig transition={{duration: 2}}>
    <motion.h3
      class="whisper-text"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        sza<br/>lati<br/>ons
      </motion.h3>
      <motion.button
        class="enter"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        onClick={props.removeLanding}>
          enter
      </motion.button>
      </MotionConfig>
    {/* {landingVisible &&
    <button class="enter" onClick={setLandingVisible(false)}>enter</button>
    } */}
    
  </>;
}

export default Landing;