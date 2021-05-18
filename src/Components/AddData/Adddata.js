import Axios from 'axios';
import React, { Component } from 'react'
import validateForm from '../../utils/validateform'
import './Adddata.css'
import Spinner from '../../Containers/Spinner/Spinner';

export class AddData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                LDR: '',
                temp: '',
                hum: '',
                ph: '',
                device_number: ''
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

        Axios.post('/table', this.state.data)
            .then(response => {
                this.setState(pre => ({
                    isloading: false
                }))
                this.props.history.push('/table')
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
                        value.length < 5
                            ? 'LDR is Required!'
                            : '';
                    break;
                }
                break;
            case 'temp':
                if (value.length === 0) {
                    errors.temp =
                        value.length < 5
                            ? 'temp is Required!'
                            : '';
                    break;
                }
                break;
            case 'hum':
                if (value.length === 0) {
                    errors.hum =
                        value.length < 5
                            ? 'hum is Required!'
                            : '';
                    break;
                }
                break;
            case 'ph':
                if (value.length === 0) {
                    errors.ph =
                        value.length < 5
                            ? 'ph is Required!'
                            : '';
                    break;
                }
                break;
            case 'device_number':
                if (value.length === 0) {
                    errors.device_number =
                        value.length < 5
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

            <div className="container container-short py-5">
                <h1 className="pt-2 py-2">Add Data</h1>
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
                            Add Data
                        </button>
                    </div>
                </form>

            </div>
        </>
        )
    }
}

export default AddData;