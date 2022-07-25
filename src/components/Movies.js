import React from "react";
import { Component} from "react";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";

class Movies extends Component {
       
    
    render() {
            return (
                <Container>
                    <Card bg='primary' text='white' style={{textAlign:'Center', width:'20rem', margin: '10px auto', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <Card.Body>
                    <Card.Img variant="top" src={this.props.poster} style={{width: '70%', margin: 'auto'}}></Card.Img>
                    
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle>Release Date: {this.props.releaseDate}</Card.Subtitle>
                    <Card.Text>{this.props.overview}</Card.Text>
                    </Card.Body>
                    </Card>
                </Container>
            )
        }
    
   


   
        
    
}
export default Movies;