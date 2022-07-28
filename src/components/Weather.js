import React from "react";
import { Component } from "react";

import Card from "react-bootstrap/Card";
import WeatherDay from "./WeatherDay";


class Weather extends Component {



    render() {
        return (
            <Card bg='primary' text='white' style={{ textAlign: 'Center', width: '20rem', margin: '20px auto', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <Card.Body>
                    {this.props.results.map(e => <Card.Text key={e.date} ><WeatherDay key={e.date} date={e.date} description={e.description} /></Card.Text>)}
                </Card.Body>
            </Card>

        )
    }





}
export default Weather;