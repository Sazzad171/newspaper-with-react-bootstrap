import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomeHero from './components/home/HomeHero';
import FullBody from './components/home/FullBody';

// react router
import { BrowserRouter as Router, Route } from '../node_modules/react-router-dom'

import NewsDetails from './components/news-details/NewsDetails'
import Politics from './components/politics-page/Politics';
import Business from './components/business-page/Business';
import Sports from './components/sports-page/Sports';
import Culture from './components/culture-page/Culture';
import World from './components/world-page/World';
import SearchResults from './components/search-page/SearchResults';
import Contacts from './components/contacts-page/Contacts';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <Header/>
          <Route exact path="/" render={ () =>
            <>
              <HomeHero/>
              <FullBody/>
            </>
          }/>

          <Route path="/news" component={ NewsDetails }/>
          <Route path="/politics" component={ Politics }/>
          <Route path="/business" component={ Business }/>
          <Route path="/sports" component={ Sports }/>
          <Route path="/culture" component={ Culture }/>
          <Route path="/world" component={ World }/>
          <Route path="/contacts" component={ Contacts }/>
          <Route path="/search" component={ SearchResults }/>

          <Footer/>
        </div>
      </Router>
    )
  }
}