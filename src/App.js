import React from 'react'
import Button from './Button'
import { Component } from 'react';

class App extends React.Component {
  buttonClicked(){
    alert('You clicked on the button!')
  }
  render(){
  return (
    <div>
      <h1>{this.props.appName}</h1>
      <Button title='Click me!' click={this.buttonClicked}/>
    </div>
    
  );
  }
}

export default App;
