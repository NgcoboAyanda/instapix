import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';

import Header from '../components/Header/Header';
import Home from '../routes/home/Home';
import Result from '../routes/result/Result';


function App() {
  return (
      <div className="app">
        <div className="app__inner">
          <div className="app__header">
            <div className="app__header__inner">
                <Header/>
            </div>
          </div>
          <div className="app__content">
            <div className="app__content__inner">
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="result/" element={<Result/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;
