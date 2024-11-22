import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/image-upload.component";



function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container">
        <h3>bezkoder.com</h3>
        <h4>React Image Upload with Preview</h4>
  
        <div className="content">
          <UploadImages />
        </div>
      </div>
    );

}

export default App
