import React from "react";
import { Component } from "react";
import Container from 'react-bootstrap/Container';
import ListGroup from "react-bootstrap/ListGroup";

class Movie extends Component {



    render() {
        return (
            <Container>
                <ListGroup style={{marginTop: '2rem'}}>
                    <ListGroup.Item>{this.props.results.title}</ListGroup.Item>
                    <ListGroup.Item>Release Date: {this.props.results.releaseDate}</ListGroup.Item>
                    <ListGroup.Item>{this.props.results.overview}</ListGroup.Item>
                </ListGroup>
            </Container>
        )
    }





}
export default Movie;
