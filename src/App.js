import React, {useState} from "react";

import Title from './Components/scripts/Title';
import Header from './Components/scripts/Header';
import Upload from './Components/scripts/Upload';
import Images from './Components/scripts/Images';
import Focusedimage from './Components/scripts/Focusimage';

function App() {

  const [currImage, setcurrImage] = useState(null);
  return (
    <div className="App">
      <Title />
      <Header />
      <Upload />
      <Images setcurrImage={setcurrImage}/>
      {currImage && <Focusedimage currImage={currImage} setcurrImage={setcurrImage} />}
    </div>
  );
}

export default App;
