import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';

import './App.css';

import Header from '../components/Header/Header';
import Home from '../routes/home/Home';
import Result from '../routes/result/Result';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchHistory } from '../features/images/imagesSlice';
import Slideshow from '../components/Slideshow/Slideshow';


function App() {
  const slideshowOpen = useSelector(state => state.slideshow.slideshowOpen);
  const searchHistory = useSelector(state => state.images.searchHistory);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(loadSearchHistory())
    },
    []
  )

  useEffect(
    () => {
      saveToSessionStorage('searchHistory', searchHistory);
    },
    [searchHistory]
  )

  const saveToSessionStorage = (name, data) => {
    sessionStorage.setItem(name, JSON.stringify(data));
  }

  useEffect(
    ()=>{
      if(slideshowOpen){
        document.body.style.overflow = 'hidden';
      }
      else{
        document.body.style.overflow = 'unset';
      }
    },
    [slideshowOpen]
  )

  const renderSlideshow = () => {
    if(slideshowOpen){
      return (
        <Slideshow/>
      )
    }
  }

  return (
      <div className="app">
        <div className="app__inner">
          <div className="app__header">
            <div className="app__header__inner">
                <Header/>
            </div>
          </div>
          <div className="app__slideshow">
            <div className="app__slideshow__inner">
                {renderSlideshow()}
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
