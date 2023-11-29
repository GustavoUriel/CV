import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner } from 'react-bootstrap';
import Home from 'pages/Home.js';

import Header from 'components/Header';
import Footer from 'components/Footer';
import AboutMe from 'pages/AboutMe';
import MyCV from 'pages/MyCV';
import DBIntroduction from 'pages/DBIntroduction';
import DBFrequentCharts from 'pages/DBFrequentCharts';
import DBIACharts  from 'pages/DBIACharts';
import DBGenerateNewData  from 'pages/DBGenerateNewData';
import DBViewRawData  from 'pages/DBViewRawData';
import Contact  from 'pages/Contact';
import NotFound  from 'pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Initialize, useServerSide, getFullData,GenerateNewData } from 'components/logical/ServerSide';

// funciones que se importan del virtual-server
function App() { 
// const { Initialize, useServerSide, getFullData,GenerateNewData  } = useServerSide();


Initialize()


  return (
    <div>

      {
        (<Router>
          <div className="App">
            <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutMe" component={AboutMe} />
                <Route exact path="/Introduction" component={DBIntroduction} />
                <Route exact path="/FrequentCharts" component={DBFrequentCharts} />
                <Route exact path="/IACharts" component={DBIACharts} />
                <Route exact path="/GenerateNewData" component={DBGenerateNewData} />
                <Route exact path="/ViewRawData" component={DBViewRawData} />
                <Route exact path="/Contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            <Footer />
          </div>
        </Router>
        )
}

    </div>
  )
}

export default App;

