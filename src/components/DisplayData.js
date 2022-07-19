import React from "react";
import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class DisplayData extends Component{

    render(){

        return(
           <Container>
            {this.props.list.map(data => (
            <Card key={data.display_name} style={{ width: '30rem', textAlign: 'center',margin:'auto' }}>
            <Card.Img variant="top" src={this.props.map}></Card.Img>
            <Card.Body>
              <Card.Title>{data.display_name}</Card.Title>
              <Card.Text>
                Latitude:{data.lat}<br></br>
                Longitude:{data.lon}
              </Card.Text>
            </Card.Body>
          </Card>
          ))}
          </Container>

        )
    }
}

export default DisplayData;