import React from 'react';
// import Home from  './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Flowers from './Pages/Flowers';
import Plants from './Pages/Plants'
import NoPage from './Pages/NoPage'
import Discount from './Pages/Discount'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='flowers' element={<Flowers />} />
        <Route path='plants' element={<Plants />} />
        <Route path='discount' element={<Discount />} />
        <Route path='*' element={<NoPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;