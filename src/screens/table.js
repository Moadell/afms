import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Container} from 'semantic-ui-react'
import { CSVLink } from "react-csv";

export class Tableview extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        fetch('https://afmsbackend.herokuapp.com/api/table').then((res) => {
            res.json().then((data) => {
                this.setState({ data: data });
                console.log(data)
            })
        })
    }
    render() {  
        return (
            <>
        <div style={{"margin-top": "20px"}}>
        <Container>
        <h1 style={{"text-align": "center"}}>Sensors Data</h1>
        
        <Table  bordered striped hover className='container'>
            <thead>
                <tr>
                    <th>Time Stamp </th>
                    <th>LDR</th>
                    <th>Hummidty</th>
                    <th>PH</th>
                    <th>Temprature</th>
                    <th>Device</th>

                </tr>
            </thead>
            <tbody>
                {
                    this.state.data.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.creation_time}</td>
                                <td>{value.LDR}</td>
                                <td>{value.hum}</td>
                                <td>{value.ph}</td>
                                <td>{value.temp}</td>
                                <td>{value.device_number}</td>


                            </tr>
                        )
                    })
                }
            </tbody>
        </Table >
        
        <CSVLink data={this.state.data}>Download me</CSVLink>
        </Container>
        </div>
    </>
                );
    }
}