import React,{useState} from 'react';
import './App.css';
import MainBox from './Components/MainBox';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
function App() {
  const [aboutDisplay,setAboutDisplay]=useState(false);
  const DisplayConfiguration=()=>{
    setAboutDisplay(!aboutDisplay);
  }
  return (
    <div className="App">
      <Header dsplyConfig={DisplayConfiguration}/>
      {aboutDisplay?null:<MainBox/>}      {aboutDisplay?<About/>:null}
      <Footer/>
    </div>
  );
}

export default App;
