import { useState } from 'react';
import './App.css';
import About2 from './components/About2';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
import Info from './components/Info';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [myStyle2, SetStyle2] = useState({
    backgroundColor: '#90a955',
    color: 'white',
  });

  const [myStyle, SetStyle] = useState({
    backgroundColor: '#31572c',
    color: 'white',
  });

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#284b63';
      showAlert('Dark mode is on successfully', 'success');

      SetStyle({
        backgroundColor: 'black',
        color: 'white',
      });

      SetStyle2({
        backgroundColor: 'grey',
      });
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f3ffb6';
      showAlert('Light mode is on successfully', 'success');
      SetStyle({
        backgroundColor: '#31572c',
        color: 'white',
      });
      SetStyle2({
        backgroundColor: '#90a955',
        color: 'white',
      });
    }
  };

  return (
    <Router>
      <>
        <Navbar
          title="MyApp2"
          aboutco3mpp="About us"
          mode={mode}
          togglemode={toggleMode}
          home="My Home"
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/Info"
            element={<Info />}
          />
          <Route
            path="/"
            element={
              <div className="container">
                  <div className = "textbox-container"  style={{ marginTop: "50px" }}>
                <Textbox heading="Textify - Word counter | character counter | Read Text | Remove extra spaces" mode={mode} showAlert={showAlert} />
                </div>
                  <div className='conntainer my-8' style={{ marginTop: "120px" }}><About2 myStyle={myStyle} myStyle2={myStyle2}   /></div>
                
              </div>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
