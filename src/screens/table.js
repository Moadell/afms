import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Container} from 'semantic-ui-react'
import { CSVLink } from "react-csv";
import 'font-awesome/css/font-awesome.min.css';
import Axios from 'axios';
import './table.css'
import validateForm from '../utils/validateform'
import Spinner from '../Containers/Spinner/Spinner';


class Popup extends React.Component {
  constructor(props) {
        super(props)

        this.state = {
            data: {
                LDR: this.props.text.LDR,
                temp: this.props.text.temp,
                hum: this.props.text.hum,
                ph: this.props.text.ph,
                device_number: this.props.text.device_number
            },
            error: {
                message: '',
                code: ''
            },
            isloading: false,
            errors: {
                LDR: '',
                temp: '',
                hum: '',
                ph: '',
                device_number: ''
            }
        }
    }

    isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

    mySubmitHandler = (event) => {
        this.setState(pre => ({
            isloading: true
        }))
        event.preventDefault();

        if (validateForm(this.state.errors)) {
        } else {
        }

        Axios.put('/table/' + this.props.text._id.toString(), this.state.data)
            .then(response => {
                this.setState(pre => ({
                    isloading: false
                }))
                window.location.reload(false);
                return "success"
            }).catch(e => {

                this.setState({
                    isloading: false,
                    error: {
                        ...this.state.error, message: e.response.data.message,
                        code: e.response.status
                    }
                });
            })

        this.setState({
            data: { ...this.state.data, LDR: '', temp: '', hum: '', ph: '', device_number: '' }
        });
    }


    myChangeHandler = (event) => {

        let nam = event.target.name;
        let val = event.target.value;
        let errors = this.state.errors;
        const { name, value } = event.target;
        switch (name) {

            case 'LDR':
                if (value.length === 0) {
                    errors.LDR =
                        value.length < 0
                            ? 'LDR is Required!'
                            : '';
                    break;
                }
                break;
            case 'temp':
                if (value.length === 0) {
                    errors.temp =
                        value.length < 0
                            ? 'temp is Required!'
                            : '';
                    break;
                }
                break;
            case 'hum':
                if (value.length === 0) {
                    errors.hum =
                        value.length < 0
                            ? 'hum is Required!'
                            : '';
                    break;
                }
                break;
            case 'ph':
                if (value.length === 0) {
                    errors.ph =
                        value.length < 0
                            ? 'ph is Required!'
                            : '';
                    break;
                }
                break;
            case 'device_number':
                if (value.length === 0) {
                    errors.device_number =
                        value.length < 0
                            ? 'device_number is Required!'
                            : '';
                    break;
                }
                break;
            default:
                break;
        }

        this.setState({ errors, data: { ...this.state.data, [nam]: val } }, () => {
        });
    }


    render() {
        let isLoading
        let iserror 

        if (this.state.isloading) {
            isLoading = (
                <>
                    <div className="container loading">
                        <div className="mar-20">
                            <Spinner />
                        </div>
                    </div>
                </>
            )
        }

        if (this.state.error.code) {
            iserror = (
                <>
                    <div className="container error container-short">
                        <div className="mar-20">
                            <h5>Error Code - {this.state.error.code}</h5>
                            <h4>Error Message - {this.state.error.message}</h4>
                        </div>
                    </div>
                </>
            )
        }
        return (<>

            {isLoading}
            {iserror}
            <div className="popup_inner">
                <div className="popup_inner">
                    <h1>Edit Data</h1>
                    <hr></hr>
                    <form onSubmit={this.mySubmitHandler} className="pt-4">
                        <div className="form-group">
                            <label htmlFor="LDR">LDR </label>
                            <input
                                type='text'
                                name='LDR'
                                value={this.state.data.LDR}
                                className={"form-control " + (this.state.errors.LDR ? 'is-invalid' : '')}
                                placeholder="Enter LDR"
                                required
                                onChange={this.myChangeHandler}
                            />
                            {this.state.errors.LDR.length > 0 &&
                                <div className="mt-1"><span className='error text-danger'>{this.state.errors.LDR}</span></div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="temp">temp </label>
                            <input
                                type='text'
                                name='temp'
                                value={this.state.data.temp}
                                className={"form-control " + (this.state.errors.temp ? 'is-invalid' : '')}
                                placeholder="Enter temp"
                                required
                                onChange={this.myChangeHandler}
                            />
                            {this.state.errors.temp.length > 0 &&
                                <div className="mt-1"><span className='error text-danger'>{this.state.errors.temp}</span></div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="hum">hum </label>
                            <input
                                type='text'
                                name='hum'
                                value={this.state.data.hum}
                                className={"form-control " + (this.state.errors.hum ? 'is-invalid' : '')}
                                placeholder="Enter hum"
                                required
                                onChange={this.myChangeHandler}
                            />
                            {this.state.errors.hum.length > 0 &&
                                <div className="mt-1"><span className='error text-danger'>{this.state.errors.hum}</span></div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="ph">ph </label>
                            <input
                                type='text'
                                name='ph'
                                value={this.state.data.ph}
                                className={"form-control " + (this.state.errors.ph ? 'is-invalid' : '')}
                                placeholder="Enter ph"
                                required
                                onChange={this.myChangeHandler}
                            />
                            {this.state.errors.ph.length > 0 &&
                                <div className="mt-1"><span className='error text-danger'>{this.state.errors.ph}</span></div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="ph">device_number </label>
                            <input
                                type='text'
                                name='device_number'
                                value={this.state.data.device_number}
                                className={"form-control " + (this.state.errors.device_number ? 'is-invalid' : '')}
                                placeholder="Enter device_number"
                                required
                                onChange={this.myChangeHandler}
                            />
                            {this.state.errors.device_number.length > 0 &&
                                <div className="mt-1"><span className='error text-danger'>{this.state.errors.device_number}</span></div>}
                        </div>

                        <div className="form-group">
                            <button style={{ marginRight: '15px' }}
                                type='submit'
                                className="btn btn-success"
                                disabled={this.isNumeric(this.state.data.LDR) && this.isNumeric(this.state.data.ph)
                                && this.isNumeric(this.state.data.temp)
                                && this.isNumeric(this.state.data.hum)
                                && this.isNumeric(this.state.data.device_number)
                                && (validateForm(this.state.errors)) ? '' : 'disabled'}
                            >
                                Edit Data
                            </button>
                            <button style={{ marginRight: '15px' }}
                                className="btn btn-success"
                                onClick={this.props.closePopup}
                            >
                                Cancel
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </>
        )
    }
}

export class Tableview extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            showPopup: false,
            output_data: {}
        };
    }

    togglePopup = (event, id) => {
        event.preventDefault();
        Axios.get('/table/'+id.toString())
            .then(response => {
                 this.setState({
                    showPopup: !this.state.showPopup,
                    output_data: response.data
                });
                return "success"
            }).catch(e => {
                return "error"
            })
    }

    togglePopup1() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

    mySubmitHandler = (event, id) => {
        event.preventDefault();
        const confirmBox = window.confirm(
            "Do you really want to delete this record?"
        )
        if (confirmBox === true) {
            Axios.delete('/table/'+id.toString())
            .then(response => {
                window.location.reload(false);
                return "success"
            }).catch(e => {
                return "error"
            })
        }    
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
        <h1 style={{"text-align": "center", 'marginBottom': "25px", 'marginTop': "30px"}}>Sensors Data</h1>
        
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
                                <td><button onClick={(event) => this.mySubmitHandler(event, value._id)}><i className="fa fa-trash"></i></button></td>
                                <td><button onClick={(event) => this.togglePopup(event, value._id)}><i className="fa fa-pencil"></i></button></td>
                            </tr>

                        )
                    })
                }
            </tbody>
        </Table >
        
        <CSVLink data={this.state.data}>Download me</CSVLink>
        {this.state.showPopup ? 
        <Popup
            text = {this.state.output_data} 
            closePopup={this.togglePopup1.bind(this)}
        />
        : null
        }
        </Container>
        </div>
    </>
                );
    }
}