import './App.css';
import React from 'react';

class Element extends React.Component{
  shoot(){
    alert('nút này đã được nhấn');
  }
  render(){
    return(
      <button onClick={this.shoot}>Click Me</button>
    )
  }
}
export default Element;
