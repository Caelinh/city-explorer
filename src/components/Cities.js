import React from "react";
import { Component } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class City extends Component {

    constructor() {
        super();
        this.state = {
            query:'',

        }
    }

    handleSearch= (e) =>{
        let { value } = e.target;
        this.setState({query: value});
     

    }
    
    handleSubmit= (e) =>{
        e.preventDefault();
        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.query}&format=json`;
        axios.get(url).then(response => {

            
            this.props.data(response.data[0])
        });
    }
    
    
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Search for a city</Form.Label>
                    <Form.Control type="text" onChange={this.handleSearch} placeholder='Enter a city'></Form.Control>
                    <Button variant='primary' type='Submit'>Explore!</Button>
                </Form>
            </Container>
        )
    }
}
export default City;