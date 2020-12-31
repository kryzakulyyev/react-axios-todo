import React from 'react'
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


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: 'click color'
    }
    this.buttonClicked = this.buttonClicked.bind(this)
  }
  randomNumber(){
    return Math.floor(Math.random() * 255) + 1;
  }
  
   buttonClicked(){
    const redColor = this.randomNumber();
    const greenColor = this.randomNumber();
    const blueColor = this.randomNumber();
    const rgbColor= `rgb(${redColor},${greenColor},${blueColor})`; 
    // document.getElementById('header').style.color=rgbColor;
    // document.getElementById('header').innerText=rgbColor;
    this.setState({color: rgbColor})
  }
  render(){
  let headerStyle= {
    color: this.state.color
  }
  return (
    <div>
      <h1 id='header'  style={{color: this.state.color}}>{this.state.color}</h1>
      <Button title='Click me!' onClick={this.buttonClicked}/>
    </div>
    
  );
  }
  }


export default App;
