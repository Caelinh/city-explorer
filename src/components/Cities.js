import React from "react";
import { Component } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

class City extends Component {

    constructor() {
        super();
        this.state = {
            query: '',
            showAlert: false
        }
    }

    handleSearch = (e) => {
        let { value } = e.target;
        this.setState({ query: value });


    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.query === '') {
            this.setState({ showAlert: true });
        } else this.setState({ showAlert: false });
        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.query}&format=json`;
        axios.get(url).then(response => {
            this.props.data(response.data[0])
        });
    }


    render() {
        return (
            <Container>
                <Form style={{ margin: 'auto', textAlign: "center", width: "30rem" }} onSubmit={this.handleSubmit}>
                    <Form.Label>Enter a City Name</Form.Label>

                    <Form.Control type="text" onChange={this.handleSearch} placeholder='Enter a city'></Form.Control>
                    {this.state.showAlert &&
                        <Alert key='danger' variant='danger'>
                            Please submit a city name.
                        </Alert>}
                    <Button style={{ margin: " 10px 10px 20px" }} variant='primary' type='Submit'>Explore!</Button>
                </Form>

            </Container>
        )
    }
}
export default City;