import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Dice from './pages/Dice';
import NoPage from './pages/NoPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";
//npm i -D react-router-dom

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="calculator" element={<Calculator />}/>
            <Route path="dice" element={<Dice />}/>
            <Route path="*" element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
