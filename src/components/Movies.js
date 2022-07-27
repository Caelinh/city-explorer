import React from "react";
import { Component} from "react";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import Movie from "./Movie";

class Movies extends Component {
       
    
    render() {
            return (
                <Container>
                    <Card bg='primary' text='white' style={{textAlign:'Center', width:'20rem', margin: '10px auto', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <Card.Body>
                    <Card.Img  variant="top" src={this.props.poster} style={{width: '70%', margin: 'auto'}}></Card.Img>
                    <Card.Text><Movie results = {this.props.nestResults}/></Card.Text>
                    </Card.Body>
                    </Card>
                </Container>
            )
        }
    
   


   
        
    
}
export default Movies;