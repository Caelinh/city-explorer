import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cities from './components/Cities';
import Container from 'react-bootstrap/Container';
import DisplayData from './components/DisplayData';
import Weather from './components/Weather';
import Movies from './components/Movies'; 
import Row from 'react-bootstrap/Row'
import { Col } from 'react-bootstrap';


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      latitude: '',
      longitude: '',
      display_name: '',
      url: '',
      showResults: false,
      searches: [],
      weatherResults: [],
      movieResults: []
    }


  }


  getData = (cityData) => {
    this.setState({
      latitude: cityData.lat,
      longitude: cityData.lon,
      display_name: cityData.display_name,
      url: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${cityData.lat},${cityData.lon}&zoom=10&size=1000x800&format=png`,
      showResults: true
    })

    this.state.searches.push(cityData);
  }

  collectWeather = (weatherData) => {
    const weatherForecast = weatherData.slice(0,5);
    this.setState({ weatherResults: weatherForecast })
  }

  collectMovie = (movieData) => {
    const topFive = movieData.slice(0,5);
    this.setState({movieResults: topFive})
  }

  render() {
    return (
      <Container>
        <header className="App-header">
          <h1>City Explorer</h1>
        </header>
        
        <Cities data={this.getData} weather={this.collectWeather} collectMovie={this.collectMovie} ></Cities>
        {this.state.showResults &&
          <DisplayData id="results" list={this.state.searches} cityName={this.state.display_name} lat={this.state.latitude} lon={this.state.longitude} weather={this.state.weatherResults} map={this.state.url}></DisplayData>}
          <h2 id="weather">5 Day Forecast</h2>
        <Row>
        {this.state.weatherResults.map(e => <Col key={e.display_name} sm><Weather key={e.date} weatherData={e.date} weatherDescription={e.description} icon={e.icon}></Weather></Col>)}
        </Row>
        <h2 id="movies">Movies About The City</h2>
        <Row>
        {this.state.movieResults.map(e=> <Movies key={e.poster} title={e.title} releaseDate={e.releaseDate} overview={e.overview} poster={`https://www.themoviedb.org/t/p/original/${e.poster}`} ></Movies>)}
        </Row>
      </Container>


    );
  }
}

export default App;
