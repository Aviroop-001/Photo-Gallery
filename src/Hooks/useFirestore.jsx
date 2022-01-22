import React, {useState, useEffect} from 'react';
import {projectFirestore, projectStorage} from '../firebase/config';

function useFirestore(collection) {
  const [document, setdocument] = useState([]);
    useEffect(() => {
      const getout = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let docs = [];
        snap.forEach(doc => {
            docs.push({...doc.data(), id:doc.id})
        });  
        setdocument(docs);
      });
      return ()=> getout();
    
    }, [collection]);
  return { document };
}

export default useFirestore;
