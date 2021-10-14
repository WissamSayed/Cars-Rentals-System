import React, { Component } from 'react';
import classes from './App.css';
import CardView from './CardView';






class App extends Component {
  state = {
    cars: [
      { title: 'Mercedes', description: 'C-Class', rentals: 5, imageSource:''},
      { title: 'Mercedes', description: 'E-Class', rentals: 26, imageSource:'' },
      { title: 'Mercedes', description: 'S-Class', rentals: 17,  imageSource:'' },
      { title: 'BMW', description: '5-Series', rentals: 8,  imageSource:'' },
      { title: 'BMW', description: '3-Series', rentals: 35,  imageSource:'' },
      { title: 'BMW', description: '7-Series', rentals: 27,  imageSource:'' },
      { title: 'VOLO', description: 'jukie', rentals: 11,  imageSource:'' },
      { title: 'VOLO', description: 'Transportor', rentals: 20,  imageSource:'' },

    ],
    
    showCarRental: true
  }

  toggleHandler = () => {
    const doesShow = this.state.showCarRental;
    this.setState( { showCarRental: !doesShow } );
  }


render(){

  let cars = null;
  let BtnClass = [classes.Button];

  if ( this.state.showCarRental ) {
    cars = (
      <div>
        {this.state.cars.map(car => { // printing the state array
          return <CardView  
          title={car.title} 
          description={car.description}         
          rentals={car.rentals}
          imageSource={car.imageSource} 
           />
        })

        }
      </div>
    )
      }
      else{
        cars = (
          <div>
            {this.state.cars.map(car => { // printing the state array
              return <CardView  
              title={car.title} 
              description={car.description}
              image={car.imageSource} />
            })
    
            }
          </div>
        ) 
        BtnClass.push(classes.Red)
      }


 

 
  
      

  return (
    <div className={classes.App}>
      <p className={classes.Header}> Card View </p>
      <p>Press this button to hide number of car rentals </p>
      <button className={BtnClass.join(' ')} onClick={this.toggleHandler} > Click </button>
      
      {cars}
      

    </div>
    



    );
  }
}



export default App;
