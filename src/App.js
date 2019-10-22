import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import MainContent from './components/layout/mainContent/mainContent';
import QuotesContainer from './containers/QuotesContainer';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="cs-app">
      <Header heading="Sporting Quotes" />
      <MainContent>
        <QuotesContainer />
      </MainContent>
      <Footer copy="Sportlabs Technology Ltd. All rights reserved" />
    </div>
  );
}

export default App;
