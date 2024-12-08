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

      <footer className="footer">
        <p>日本大学文理学部情報科学科 Webプログラミングの演習課題: 5423074 望月公輔</p>
        <p>参考元: https://www.youtube.com/watch?v=NJ1inoC1L1k&t=1292s</p>
        <p>https://www.youtube.com/watch?v=LrhYbXOGLZo&t=199s</p>
      </footer>
    </BrowserRouter>
  );
};

export default App;
