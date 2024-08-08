import React from 'react';
import './App.css';
// import { Best, Collections, Contact, Footer, Header, Products } from "./components";
import {Routes, Route} from "react-router-dom"
import Check from "./pages/Check"
import Cart from './pages/Cart'
import Shop from "./pages/Shop"
import Home from "./pages/Home"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/addToCart' element={<Cart />}/>
         <Route path='/check' element={<Check />}/>
         <Route path='/shop' element={<Shop />}/>
      </Routes>
    </>
  );
}

export default App;

// import React from 'react'
// import { BrowserRouter,Routes, Route } from "react-router-dom";
// import addToCart from "./pages/addToCart"


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route index element = {<Shop />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App