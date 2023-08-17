import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Bollywood from './Component/Bollywood';
import Hollywood from './Component/Hollywood';
import Technology from './Component/Technology';
import Fitness from './Component/Fitness';
import Food from './Component/Food';
import Linkcompo from './Component/Linkcompo';
import { createContext } from 'react';
import Data from './Component/Store';
import Innerpage from './Component/innerpage';

export const info=createContext(Data)
function App() {
  return (
  <>
<h1 className='siren'><div className='the'>The</div><div className='siren1'> Siren</div></h1>
<info.Provider value={Data}>
   <BrowserRouter >
   <Linkcompo></Linkcompo>
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/bollywood" element={<Bollywood/>}/>
       <Route path="/hollywood" element={<Hollywood/>}/>
       <Route path="/technology" element={<Technology/>}/>
       <Route path="/fitness" element={<Fitness/>}/>
       <Route path="/food" element={<Food/>}></Route>
       <Route path='*' element={< Innerpage/>} />
   </Routes>
   </BrowserRouter>
   </info.Provider>
  </>
  );
}

export default App;
