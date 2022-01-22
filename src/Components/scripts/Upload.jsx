import React, { useState } from 'react';
import '../styles/Upload.scss';
import ProgressBar from './ProgressBar';



export default function Upload() {

    const [file, setfile] = useState(null);
    const [error, seterror] = useState(null);

    const changeHandler =(e) =>{
        let selectedFile = e.target.files[0];
        if(selectedFile && (selectedFile.type==='image/png' || selectedFile.type==='image/jpeg')){
            setfile(selectedFile);
            seterror(null);
        }
        else{
            setfile(null);
            seterror('Please select .png/.jpeg files');
        }
    }

  return( <div className='Upload'>
    <div>
        <label htmlFor="inputfile">
            <i className="fa fa-plus-circle" id='icon'></i>
        </label>
    </div>
    <form>
        <input id='inputfile' type="file" onChange={changeHandler}/>
        <div className="output">
            {error && <div className='error'>{error}</div>}
            {file && <div className='file'>{file.name}</div>}
            {file && <ProgressBar file={file} setfile={setfile} />}
        </div>
    </form>
  </div>
  );
}
