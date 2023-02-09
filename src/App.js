import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './Appa.css';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const [mode ,setmode]=useState('light')
  const [alert,setalert]=useState(null)
  const showalert=(mesg,type)=>{
    setalert({msg:mesg,type:type})
    setTimeout(()=>{setalert(null)},3000)
  }
  let togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#105473'
      showalert("Dark mode has been enabled","success")
      document.title="Textutils-D"   
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'  
      showalert("light mode has been enabled","success")  
      document.title="Textutils-L"            
    }
  }
  return (
    <>
    <Navbar title="Text-Utils" mode={mode} togglemode={togglemode}/ >

      <Alert Alert={alert}/>

    <div className="container col-md-8 my-3">

    <TextForm showalert={showalert} heading="Enter your text to analyze"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
