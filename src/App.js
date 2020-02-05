import React from 'react';
import HeaderLinks from './Components/HeaderLinks';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <h1>300 Days of React</h1>
      </header>

      <HeaderLinks />

      <h1>Website In Progess, as I grow the #300DaysOfReact community, this page will grow with resources, A discord group and tutorials from around the web!</h1>

      <a href="https://twitter.com/intent/tweet?text=I%27m%20committing%20to%20the%20300DaysOfReactJS%20Challenge%20from%20today!%20Learn%20More%20and%20Why%20not%20join%20us%20yourself?&amp;url=https://100DaysOfCode.com&amp;hashtags=300DaysOfReactJS" target="_blank"
        rel="noopener noreferrer">Tweet to commit to the challenge!</a>


      
      
      
    </div>
  );
}

export default App;
