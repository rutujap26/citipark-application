import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {Form, Button} from 'react-bootstrap'
import {connect} from "react-redux";
import {createSlots} from '../actions/ParkingActions'
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';




class ParkingSlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingTime : "",
            parkingDuration : "",
            parkingDate: new Date(),
            stateFormErrors:{}
            
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }
    handleFormValidation=()=> {
        const {parkingTime,parkingDuration, parkingDate  } = this.state;
            let formErrors = {};
            let formIsValid = true;

            if(!parkingTime) {
                formIsValid = false;
                formErrors["parkingTimeError"] = "Parking Time Required";
            }

            if(!parkingDate) {
                formIsValid = false;
                formErrors["parkingDateError"] = "Parking Date is Required";
            }

            if(!parkingDuration) {
                formIsValid = false;
                formErrors["parkingDurationError"] = "ParkingDuration Required";
            }

          

            this.setState({stateFormErrors: formErrors});
            return formIsValid;
    }
 
    onChange(event) {
        this.setState(
            {[event.target.name]:event.target.value}
        );
    }

    onDateChange(parkingDate) {
        this.setState({
          
            parkingDate: parkingDate
        });
    }

    onSubmit(event){
        event.preventDefault();
        if(this.handleFormValidation())
        {

            const newBooking = {
           
                parkingTime : this.state.parkingTime,
                parkingDuration : this.state.parkingDuration,
                parkingDate: this.state.parkingDate
               }
               this.props.createSlots(newBooking,this.props.history);
               
               swal("Your Slot has been booked"," ", "success");
            //    this.props.history.push('/parkingSlotDashboard');
    
        }

        }
        submitForm (e) {
            e.preventDefault()
            this.props.history.push('/payment'); // <--- The page you want to redirect your user to.
          }
       

    render() {
        return (
            <div className="ParkingHero">
                <div className="booking">
                    <h1 class="display-3 text-center"><b><i>BOOK YOUR SLOT !</i></b></h1>
                    <div>
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <hr />
                                <form form onSubmit={this.onSubmit}>
                                    <h4><b>Parking Time</b></h4>
                                    <div className="form-group">
                                    <input  type="time" 
                                    className="form-control form-control-lg"
                                    value={this.state.parkingTime}
                                    onChange={this.onChange}
                                       name="parkingTime"  />
                                    </div>
                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                    <div>
                                        <p className="error" style={{color:"white"}}><b>{this.state.stateFormErrors.parkingTimeError}</b></p>
                                    </div>
                                    <h4><b>Parking Duration(in Hours)</b></h4>
                                    <div className="form-group">
                                        <input  type="number"
                                         min="10" 
                                         max="100" 
                                         className="form-control form-control-lg"
                                         value={ this.state.parkingDuration}
                                         onChange={this.onChange}
                                            name="parkingDuration"  />
                                    </div>

                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                    <div>
                                        <p className="error" style={{color:"white"}}><b>{this.state.stateFormErrors.parkingDurationError}</b></p>
                                    </div>
                                    <div>
                                        <h4><b>Parking Date</b></h4>
                                        <div className="form-group">
                                            <DatePicker className="form-control form-control-lg"
                                            selected={this.state.parkingDate}
                                                
                                                onChange={this.onDateChange}
                                                minDate={new Date()}
                                                dateFormat="dd/MM/yyyy"
                                                name="parkingDate"
                                            />
                                        </div>
                                        <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                    <div>
                                        <p className="error" style={{color:"white"}}><b>{this.state.stateFormErrors.parkingDateError}</b></p>
                                    </div>
                                        
                                        
                                        
                                    </div>
                                    
                                    <input type="submit" onSubmit={()=>this.onSubmit} className="btn btn-primary btn-block mt-5" />
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default  connect(null,{createSlots})(ParkingSlot);