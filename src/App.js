import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
// import SearchBar from './Components/SearchBar';
// import QuotesContainer from './Components/QuotesContainer';
// import AddQuote from './Components/AddQuote';


export default class App extends Component {

render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
}
}
