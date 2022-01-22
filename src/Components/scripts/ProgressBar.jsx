import React, {useEffect} from 'react';
import useStorage from '../../Hooks/useStorage';
import '../styles/ProgressBar.scss';
import {motion} from 'framer-motion';

function ProgressBar({ file, setfile }) {

    const {imageurl, progress } = useStorage(file);

    useEffect(() => {
      if(imageurl){
        setfile(null);
      }
    }, [imageurl]);
    
  return <div className='ProgressBar'>
      <motion.div className="bar"
      initial = {{width: 0}}
      animate = {{width: progress+'%'}}>
      </motion.div>
  </div>;
}

export default ProgressBar;

