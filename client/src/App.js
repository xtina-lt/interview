import './App.css';
import React, {useState} from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import Essay from './components/Essay'
import Questions from './components/Questions';
import Thanks from './components/Thanks';
import Catchall from './components/Catchall';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [header, setHeader] = useState("Melissa Interview");
  
  return (
    <>
      <BrowserRouter>
        <header>
          {header}
        </header>
        <Nav/>
        <main>
            <Routes>
            <Route path='/*' element={<Catchall setHeader={setHeader}/>}/>
              <Route exact path = '/' element={<Home/>}/>
              <Route exact path='/essay' element={<Essay/>}/>
              <Route exact path='/questions' element={<Questions setHeader={setHeader}/>}/>
              <Route exact path='/thanks' element={<Thanks setHeader={setHeader}/>}/>
            </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
export default App;
