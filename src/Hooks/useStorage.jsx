import React, {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

export default function useStorage(file) {

    const [progress, setprogress] = useState();
    const [error, seterror] = useState(null);
    const [imageurl, setimageurl] = useState(null);

    useEffect(() => {
      const storageRef = projectStorage.ref(file.name);
      const collectionRef = projectFirestore.collection('images');

      storageRef.put(file).on('state_changed', (snap) => {
          let percentprogress = (snap.bytesTransferred / snap.totalBytes) *100;
          setprogress(percentprogress);
      }, 
        (err) => {
          seterror(err);
      }, 
        async() => {
          const imageurl = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          collectionRef.add({imageurl, createdAt })
          setimageurl(imageurl);
      })
    }, [file]);
    

  return { progress, imageurl, error };
}

