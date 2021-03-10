import React, { Component } from 'react';
import {createSlots} from '../actions/ParkingActions'
import DatePicker from 'react-datepicker';
import swal from 'sweetalert';
import {getSlot} from '../actions/ParkingActions';
import { PropTypes } from 'prop-types';
import {connect} from "react-redux";



 class UpdateSlot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            parkingSlotId:"",
            bookingDate:"",
            parkingTime : "",
            parkingDuration : "",
            parkingDate: new Date(),
            stateFormErrors:{}
        

        };
        this.onDateChange = this.onDateChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

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

    handleFormValidation=()=> {
        const {parkingTime,parkingDuration, parkingDate, parkingSlotId  } = this.state;
            let formErrors = {};
            let formIsValid = true;
            if(!parkingSlotId) {
                formIsValid = false;
                formErrors["parkingSlotIdError"] = "Parking Slot Id Required";
            }

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
    onSubmit(event) {
        event.preventDefault();
         if (this.handleFormValidation()) {
            const newBooking = {
                id:this.state.id,
                parkingSlotId: this.state.parkingSlotId,
                bookingDate:this.state.bookingDate,
                parkingTime : this.state.parkingTime,
                parkingDuration : this.state.parkingDuration,
                parkingDate: this.state.parkingDate
               }
               this.props.createSlots(newBooking,this.props.history);
               swal("Your Slot has been booked"," ", "success");

         }
        // console.log(newBooking);
    }
    componentWillReceiveProps(nextProps){
    
        const {
           id,
           parkingSlotId,
           bookingDate,
           parkingTime,
           parkingDuration,
           parkingDate,
         
        
        } = nextProps.slot;
        this.setState({
            id,
           parkingSlotId,
           bookingDate,
           parkingTime,
           parkingDuration,
           parkingDate,
           
        })
    }
    componentDidMount(){
        const {id}= this.props.match.params;
        this.props.getSlot(id,this.props.history);
    }
    render() {
        return (
            <div className="ParkingHero">
                <div className="booking">
                    <h5 class="display-3 text-center"><b><i>UPDATE YOUR SLOT !</i></b></h5>
                    <div>
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <hr />
                                <form form onSubmit={this.onSubmit}>

                                <h4><b>Parking Id</b></h4>
                                    <div className="form-group">
                                    <input  type="number" 
                                    className="form-control form-control-lg"
                                    value={this.state.parkingSlotId}
                                    onChange={this.onChange}
                                       name="parkingSlotId"  />
                                    </div>

                                    <div className="line-box">
                                    <div className="line"></div>
                                </div>
                                <div>
                                    <p className="error" style={{color:"white"}}><b>{this.state.stateFormErrors.parkingSlotIdError}</b></p>
                                </div>
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
        )
    }
}
UpdateSlot.propTypes = {
    getSlot: PropTypes.func.isRequired,
    createSlots: PropTypes.func.isRequired,
    slot: PropTypes.object.isRequired
}
const mapStateToProps = state => (
    { slot: state.slots.slot }
)

export default connect(null, { createSlots, getSlot})(UpdateSlot);