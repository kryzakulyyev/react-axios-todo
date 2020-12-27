import React from 'react';

class Button extends React.Component{
  // buttonClicked(){
  //   alert('You clicked on the button!')
  // }

 render(){
   return <button onClick={this.props.onClick}>{this.props.title}</button>
 }
}
export default Button;