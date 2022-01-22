import React from 'react';
import "../styles/Focusimage.scss";
import {motion} from 'framer-motion';

export default function Focusimage({ currImage, setcurrImage }) {

    const clickHandler = (e) =>{
        if(e.target.classList.contains('zoomed-image')){
            setcurrImage(null);
        }
    }
  return <motion.div className='zoomed-image' onClick={clickHandler}
    initial= {{opacity: 0}}
    animate = {{opacity: 1}}>
      <motion.img src={currImage} alt="A zoomed version" 
      initial = {{y: '-100vh'}}
      animate ={{y: 0}}
      transition={{delay: 0.5}}/>
  </motion.div>;
}

