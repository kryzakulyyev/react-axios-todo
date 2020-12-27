// import React from 'react'
import Button from './Button'
import { Component } from 'react';

// class App extends React.Component {
//   buttonClicked(){
//     alert('You clicked on the button!')
//   }
//   render(){
//   return (
//     <div>
//       <h1>{this.props.appName}</h1>
//       <Button title='Click me!' click={this.buttonClicked}/>
//     </div>
    
//   );
//   }
// }
function randomNumber(){
  return Math.floor(Math.random() * 255) + 1;
}

function buttonClicked(){
  const redColor = randomNumber();
  const greenColor = randomNumber();
  const blueColor = randomNumber();
  const rgbColor= `rgb(${redColor},${greenColor},${blueColor})`; 
  document.getElementById('header').style.color=rgbColor;
  document.getElementById('header').innerText=rgbColor;
}

function App(props) {
  
  return (
    <div>
      <h1 id='header'>{props.appName}</h1>
      <Button title='Click me!' onClick={buttonClicked}/>
    </div>
    
  );
  }


export default App;
