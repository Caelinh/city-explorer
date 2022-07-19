import React from "react";
import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class DisplayData extends Component{

    render(){

        return(
           <Container>
            <Card key={this.props.cityName} style={{ width: '30rem', textAlign: 'center',margin:'auto' }}>
            <Card.Img variant="top" src={this.props.map}></Card.Img>
            <Card.Body>
              <Card.Title>{this.props.cityName}</Card.Title>
              <Card.Text>
                Latitude:{this.props.lat}<br></br>
                Longitude:{this.props.lon}
              </Card.Text>
            </Card.Body>
          </Card>
          
          </Container>

        )
    }
}

export default DisplayData;