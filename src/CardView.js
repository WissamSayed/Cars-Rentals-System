import React from 'react';
import classes from './App.css'


 const CardView =(props) => {
   

   

  return(


    <div className={classes.CardView} >
    
    <p className = {classes.bold} >Title: {props.title} </p>
    <p>Description: {props.description} </p>
    <p>Number of car rentals: {props.rentals} </p>
    <p>Image: {props.image} </p>
    <image source = {props.imageSource}/>

    </div>


  )






  }




export default CardView;