import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Layout from "./components/layout";
import Detail from "./pages/detail";
import Homes from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path='/order' element={<Layout />}>
          <Route index element={<Homes />} />
          <Route path=':slug' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
