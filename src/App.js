

import { Routes, Route } from 'react-router-dom';

import Login from './components/login/login.js';
// import Main from './components/main/Main.js';
import img from './img/bird.png';

import './App.css';

//////////////////////////////////////////////////////////////////////////

function App() {

  return (

    <Routes>
      <Route exact path="/" element={
        <>
          <header className="title">
            <span>BiRdie </span>
            <img src={img} alt="logo" width="32" height="32" />
          </header>
          <Login />
        </>
      } />



      {/* <Route path="*" element={<NotFound />}/> */}
    </Routes>
  );
}

//////////////////////////////////////////////////////////////////////////

export default App;
