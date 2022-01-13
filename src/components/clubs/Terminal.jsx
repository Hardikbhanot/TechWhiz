import React from 'react';
import './clubs.scss';
import JaduMenu from './JaduMenu';

function Termeenal() {

   return(
      <div className='menuu'><JaduMenu parentCall={Terminal.callbackFunction}/></div>
      )   
}
class Terminal extends React.Component{
   constructor(){
       super();
   }   
   state = {chunnuKiYaden:""}
  static callbackFunction = (childData) => {
      this.setState({chunnuKiYaden: childData})
      console.log(childData);
}
   render(){
      return <Termeenal/>
   }   
   }
export default Terminal


