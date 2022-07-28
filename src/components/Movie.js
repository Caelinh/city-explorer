import React from "react";
import { Component } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";


class Movie extends Component {



    render() {
        return (
            <Col>
                <ListGroup style={{ marginTop: '2rem' }}>
                    <ListGroup.Item>{this.props.title}</ListGroup.Item>
                    <ListGroup.Item>Release Date: {this.props.releaseDate}</ListGroup.Item>
                    <ListGroup.Item>{this.props.overview}</ListGroup.Item>
                </ListGroup>
            </Col>
        )
    }





}
export default Movie;
