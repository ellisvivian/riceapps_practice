import React, {useState} from 'react';
import logo from './wiess_logo.png';
import pic from './personal_pic.jpg';
import './App.css';

function App() {
  
  const [text, setText] = useState("")
  const [value, setValue] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="team wiess"/>
        <h1>
          Vivian Ellis
        </h1>
        <p>
          Cupertino, CA → Houston, TX<br></br>
          <a
            className = "tino-link"
            href = "https://chs.fuhsd.org/"
            target = "_blank"
            rel = "noopener noreferrer"
          >
            Cupertino High School
          </a>
          <br></br>
          <a
            className = "rice-link"
            href = "https://rice.edu"
            target = "_blank"
            rel = "noopener noreferrer"
          >
            Rice University<br></br>
          </a>
          <button type = "button" onClick = {() => {setText("wow you clicked the button")}}>Click Me</button>
          <br></br>{text}
        </p>
        <img src={pic} className = "pic" alt = "me"/>
      </header>
    </div>
  );
}

export default App;
