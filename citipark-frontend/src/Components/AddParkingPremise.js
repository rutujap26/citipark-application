import React from "react";
import classnames from "classnames";
import { addParkingPremise } from "../actions/ParkingPremiseActions";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
const initialState = {
    parkingPremiseName: "",
    premiseIdentifier: "",
    numberOfParkingFloors: "",
    city: "",
    state: "",
    pincode: "",
    parkingPremiseNameError: "",
    premiseIdentifierError: "",
    numberOfParkingFloorsError: "",
    cityError: "",
    stateError: "",
    pincodeError: "",
    errors: {}

}
class AddParkingPremise extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormValidation = this.handleFormValidation.bind(this);
    }
    state = initialState;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFormValidation() {
        let parkingPremiseNameError = "";
        let premiseIdentifierError = "";
        let numberOfParkingFloorsError = "";
        let cityError = "";
        let stateError = "";
        let pincodeError = "";

        if (!this.state.parkingPremiseName) {
            parkingPremiseNameError = "Parking Premise Name is required";
        }
        if (!this.state.premiseIdentifier) {
            premiseIdentifierError = "Parking Premise Identifier is required";
        }
        else if (!this.state.premiseIdentifier.match("^[A-Z][0-9][0-9]$")) {
            premiseIdentifierError = "Invalid Premise Identifier";
        }
        if (!this.state.numberOfParkingFloors) {
            numberOfParkingFloorsError = "Number of parking floors is required";
        }
        else if (this.state.numberOfParkingFloors < 0) {
            numberOfParkingFloorsError = "Invalid Number";
        }
        if (!this.state.city) {
            cityError = "City is required";
        }
        else if (this.state.city === this.state.state) {
            cityError = "Invalid";
        }
        if (!this.state.state) {
            stateError = "State is required";
        }
        else if (this.state.state === this.state.city) {
            stateError = "Invalid";
        }
        if (!this.state.pincode) {
            pincodeError = "Pincode is required";
        }
        else if (!this.state.pincode.match("^[1-9][0-9]{5}$")) {
            pincodeError = "Invalid Pincode";
        }
        if (parkingPremiseNameError || premiseIdentifierError || numberOfParkingFloorsError || cityError || stateError || pincodeError) {
            this.setState({ parkingPremiseNameError, premiseIdentifierError, numberOfParkingFloorsError, cityError, stateError, pincodeError });
            return false;
        }
        return true;

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.handleFormValidation();
        if (isValid) {
            const newPremise = {
                parkingPremiseName: this.state.parkingPremiseName,
                premiseIdentifier: this.state.premiseIdentifier,
                numberOfParkingFloors: this.state.numberOfParkingFloors,
                city: this.state.city,
                state: this.state.state,
                pincode: this.state.pincode
            }
            this.props.addParkingPremise(newPremise, this.props.history);
            if (this.state.errors) {
                console.log(this.state.errors);
            }
            else {
                alert('Parking Premise Added Successfully');
                console.log(this.state);
                this.setState(initialState);
            }
        }
        console.log("----------------submit button clicked------------------");
    }
    render() {
        const { errors } = this.state;
        return (
            <div className="parkingPremise">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <h5 className="display-4 text-center text-white">Add Parking Premise</h5>
                            <hr />
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                            name="parkingPremiseName"
                                            placeholder="Paking Premise Name"
                                            value={this.state.parkingPremiseName}
                                            onChange={this.handleChange}
                                            className={classnames("form-control",
                                                { "is-invalid": this.state.parkingPremiseNameError })}
                                        />
                                        <div className="text-danger">{this.state.parkingPremiseNameError}</div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            name="premiseIdentifier"
                                            placeholder="Premise Identifier"
                                            value={this.state.premiseIdentifier}
                                            onChange={this.handleChange}
                                            className={classnames("form-control",
                                                { "is-invalid": this.state.premiseIdentifierError })}
                                        />
                                        <div className="text-danger">{this.state.premiseIdentifierError}</div>
                                        {
                                            errors.premiseIdentifier && <div className="text-danger">{errors.premiseIdentifier}</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input type="number"
                                            name="numberOfParkingFloors"
                                            placeholder="Number of Parking Floors"
                                            value={this.state.numberOfParkingFloors}
                                            onChange={this.handleChange}
                                            className={classnames("form-control",
                                                { "is-invalid": this.state.numberOfParkingFloorsError })}
                                        />
                                        <div className="text-danger">{this.state.numberOfParkingFloorsError}</div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            name="city"
                                            placeholder="City"
                                            value={this.state.city}
                                            onChange={this.handleChange}
                                            className={classnames("form-control",
                                                { "is-invalid": this.state.cityError })}
                                        />
                                        <div className="text-danger">{this.state.cityError}</div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            name="state"
                                            placeholder="State"
                                            value={this.state.state}
                                            onChange={this.handleChange}
                                            className={classnames("form-control",
                                                { "is-invalid": this.state.stateError })}
                                        />
                                        <div className="text-danger">{this.state.stateError}</div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            name="pincode"
                                            placeholder="Pincode"
                                            value={this.state.pincode}
                                            onChange={this.handleChange}
                                            className={classnames("form-control",
                                                { "is-invalid": this.state.pincodeError })}
                                        />
                                        <div className="text-danger">{this.state.pincodeError}</div>
                                    </div>
                                    <input type="submit" value="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
AddParkingPremise.propTypes = {
    addParkingPremise: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    parkingPremise: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    parkingPremises: state.parkingPremises,
    errors: state.errors
})
export default connect(mapStateToProps, { addParkingPremise })(AddParkingPremise);