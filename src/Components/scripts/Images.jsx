import React from 'react';
import useFirestore from '../../Hooks/useFirestore';
import '../styles/Images.scss';
import {motion} from 'framer-motion';

function Images({setcurrImage}) {

    const {document} = useFirestore('images');
    console.log(document);
    return( 
        <div className='Images'>
        {document.map( doc => (
          <motion.div className="image" key={doc.id}
          layout
          whileHover={{opacity: 1}}
          onClick={() =>{
              setcurrImage(doc.imageurl)
          }}>
              <motion.img src={doc.imageurl} alt="Upload Successful"
              initial = {{opacity: 0.2}}
              animate = {{opacity: 1}} 
              transition={{delay: 0.5}}/>
          </motion.div>
        ))}
        </div>
    );
}

export default Images;
