import React from 'react';
import classes from './CardView.css'


 const CardView =(props) => {
  

 
   this.state={ showRentals: false}
    
  

  // var handleChange =(e)=>{
    
    
  //   this.setState({showRentals: !this.state.showRentals})
  // }
   

if(this.state.showRentals){
  
  return(
    <div className={classes.CardView} >
      <p className = {classes.bold} >Title: {props.title} </p>
      <p>Description: {props.description} </p>
      <p>Number of car rentals: {props.rentals} </p>
      <p>Image: {props.image} </p>
      <img className={classes.Size} src = {props.imageSource}/>
      
    </div>
  )}

else{
  return(
    <div className={classes.CardView} >
      <p className = {classes.bold} >Title: {props.title} </p>
      <p>Description: {props.description} </p>
      <p>Image: {props.image} </p>
      <img className={classes.Size} src = {props.imageSource}/>
    </div>
  )}


  }

  




export default CardView;