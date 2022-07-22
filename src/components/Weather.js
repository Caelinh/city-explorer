import React from "react";
import { Component } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import { Card } from "react-bootstrap";

class Weather extends Component {



    render() {
        console.log(this.props.weatherData[0].date)
        return (
            <Container>
                <Card style={{textAlign:'Center', width:'20rem', margin: 'auto'}}>
                <Card.Text>{this.props.weatherData}</Card.Text>
                <Card.Text>{this.props.weatherDescription}</Card.Text>
                </Card>
            </Container>
        )
    }





}
export default Weather;