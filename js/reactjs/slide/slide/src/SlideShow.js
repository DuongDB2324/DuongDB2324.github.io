import React from 'react';
import './slide.css';
class SlideShow extends React.Component{
    constructor(props){
      super(props);
      this.state={image:1};
    }
    auto=()=> {
      this.timer=setInterval(() => {
        this.setState({image:this.state.image==6?1:this.state.image+1})
      }, 1500)
    }
    next=()=>{
      this.setState({image:this.state.image==6?1:this.state.image+1})
    }
    back=()=>{
      this.setState({image:this.state.image==1?6:this.state.image-1})
    }
    pause=()=>{
      clearInterval(this.timer);
     }
    render(){
      return(
        <div className="slide">
          <img className="image" src={"img/slide"+this.state.image+".jpg" } alt="image1" />
          <a className="icon-back" onClick={this.back}><i className="fas fa-angle-left"></i></a>
          <a className="icon-next" onClick={this.next}><i className="fas fa-angle-right"></i></a>
          <button className="button" type="button" onClick={this.auto}>AUTO</button>
          <div class="pause"><button className="button1" type="button" onClick= {this.pause}>PAUSE</button></div>
        </div>
      )
    }
      
  }
  export default SlideShow;