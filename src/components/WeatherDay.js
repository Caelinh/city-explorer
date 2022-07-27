import React from "react";
import { Component } from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from "react-bootstrap/ListGroup";

class WeatherDay extends Component {



    render() {
        return (
            <Container>
                <ListGroup>
                    <ListGroup.Item>{this.props.results.date}</ListGroup.Item>
                    <ListGroup.Item>{this.props.results.description}</ListGroup.Item>
                </ListGroup>
            </Container>
        )
    }





}
export default WeatherDay;
