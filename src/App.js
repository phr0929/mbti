import React, {Component} from 'react';
import { HashRouter, Routes ,Route,} from 'react-router-dom'
import './App.css';
import Mbti from './Mbti'
import MbtiResult from './Mbti/MbtiResult'


function App() {
  
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) kakao.init('152cff34a176ba19c22f2f1b6260b315')
  }


  return (
    <div className="App">
      <React.StrictMode>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Mbti/>}/>
              <Route path="/MbtiResult" element={<MbtiResult/>}/>
            </Routes>
        </HashRouter>
      </React.StrictMode>
 
    </div>
  );
}

export default App;
