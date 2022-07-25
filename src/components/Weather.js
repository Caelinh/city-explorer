import React from "react";
import { Component } from "react";
import Container from 'react-bootstrap/Container';
import  Card  from "react-bootstrap/Card";

class Weather extends Component {



    render() {
        return (
            <Container>
                <Card bg='primary' text='white' style={{textAlign:'Center', width:'20rem', margin: '20px auto', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <Card.Body>
                <Card.Text>{this.props.weatherData}</Card.Text>
                <Card.Text>{this.props.weatherDescription}</Card.Text>
                </Card.Body>
                </Card>
            </Container>
        )
    }





}
export default Weather;