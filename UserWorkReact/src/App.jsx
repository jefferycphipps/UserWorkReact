import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
      <div className="App">
          <h2>Add Image:</h2>
          <input type="file" onChange={handleChange} />
          <img src={file} />
      </div>
  );
}

export default App
