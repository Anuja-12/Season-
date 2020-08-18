import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

 
class App extends React.Component{
    //constructor del
     state={lat:null, errorMessage: ''};

     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=> this.setState({lat: position.coords.latitude}),
            err=> this.setState({errorMessage: err.message})
            );
          }
     /*componentDidUpdate(){
        console.log('My component was just updated- it rerendered.');
     } */  
    render(){
    return <div>
        <SeasonDisplay  lat ={this.state.lat}/><br/>
        Error: {this.state.errorMessage }
        </div>;
    }


  /*  render(){
     if(this.state.errorMessage && !this.state.lat){
       return <div>Error: {this.state.errorMessage}</div>;
     }
     if(this.state.lat && !this.state.errorMessage){
        return <div>Latitude: {this.state.lat}</div>;
    }
      return <div>Loading!</div>;
    }

*/};
ReactDOM.render(<App/>, document.querySelector('#root'));
