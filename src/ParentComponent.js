import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
export default class ParentComponent extends Component {
    componentDidMount(){
       setInterval(this.show,2000); 
    }
    
    show = () => {
      console.log("sujeet");
    }

  render() {
    return (
      <div>
         <ChildComponent/>
      </div>
    )
  }
}
