import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cities from './components/Cities';
import Container from 'react-bootstrap/Container';
import DisplayData from './components/DisplayData';



class App extends Component {
  
  constructor(props){
    super();
    this.state ={
      latitude: '',
      longitude: '',
      display_name: '',
      url: '',
      showResults: false,
      searches: []
    }
    
    
  }


  getData = (cityData) =>{
    this.setState({
      latitude: cityData.lat,
      longitude: cityData.lon,
      display_name : cityData.display_name,
      url: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${cityData.lat},${cityData.lon}&zoom=10&size=1000x800&format=png`,
      showResults: true
    })
    
    this.state.searches.push(cityData);
  }
 

 
 
  render() {
    return (
      <Container>
      <header className="App-header">
        <h1>City Explorer</h1>
      </header>
      <Cities data={this.getData}></Cities>
      {this.state.showResults &&
      <DisplayData id="results" list={this.state.searches} cityName={this.state.display_name} lat={this.state.latitude} lon={this.state.longitude} map={this.state.url}></DisplayData>}
      </Container>


    );
  }
}

export default App;
