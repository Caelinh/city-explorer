import React from "react";
import { Component} from "react";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import Movie from "./Movie";
import  Row  from "react-bootstrap/Row";

class Movies extends Component {
       
    
    render() {
            return (
                
                <Container>
                    <Row>
                     {this.props.results.map( e =>  
                    <Card bg='primary' text='white' style={{textAlign:'Center', width:'20rem', margin: '10px auto', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <Card.Body>
                    <Card.Img  variant="top" src={`https://www.themoviedb.org/t/p/original/${e.poster}`} style={{width: '70%', margin: 'auto'}}></Card.Img>
                    <Card.Text ><Movie key={e.title} title={e.title} release={e.release} overview={e.overview}/></Card.Text>
                    </Card.Body>
                    </Card>)} 
                    </Row>
                </Container>
                
            )
        }
    
   


   
        poster={}
    
}
export default Movies;