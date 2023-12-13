

import { Routes, Route } from 'react-router-dom';

import { AuthorizationPage } from './page/authorization-page';

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
          <AuthorizationPage />
          <footer className='footer'>--- Megatr0nik ---</footer>
        </>
      } />



      {/* <Route path="*" element={<NotFound />}/> */}
    </Routes>
  );
}

//////////////////////////////////////////////////////////////////////////

export default App;
