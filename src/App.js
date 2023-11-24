

import { Routes, Route } from 'react-router-dom';

import Login from './components/login/login.js';
import Main from './components/main/Main.js';

import './App.css';

//////////////////////////////////////////////////////////////////////////

function App() {

  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route exact path="/" element={<Login />} />
      {/* <Route path="*" element={<NotFound />}/> */}
    </Routes>
  );
}

//////////////////////////////////////////////////////////////////////////

export default App;
