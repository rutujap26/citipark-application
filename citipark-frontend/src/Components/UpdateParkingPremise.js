import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { getPremise, addParkingPremise } from '../actions/ParkingPremiseActions';
import { PropTypes } from "prop-types";

class UpdateParkingPremise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            parkingPremiseId: "",
            parkingPremiseName: "",
            premiseIdentifier: "",
            numberOfParkingFloors: "",
            city: "",
            state: "",
            pincode: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormValidation = this.handleFormValidation.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleFormValidation() {
        let parkingPremiseNameError = "";
        let numberOfParkingFloorsError = "";
        let cityError = "";
        let stateError = "";
        let pincodeError = "";

        if (!this.state.parkingPremiseName) {
            parkingPremiseNameError = "Parking Premise Name is required";
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
        if (parkingPremiseNameError || numberOfParkingFloorsError || cityError || stateError || pincodeError) {
            this.setState({ parkingPremiseNameError, numberOfParkingFloorsError, cityError, stateError, pincodeError });
            return false;
        }
        return true;

    }
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.handleFormValidation();
        if (isValid) {
            const newPremise = {
                id: this.state.id,
                parkingPremiseId: this.state.parkingPremiseId,
                parkingPremiseName: this.state.parkingPremiseName,
                premiseIdentifier: this.state.premiseIdentifier,
                numberOfParkingFloors: this.state.numberOfParkingFloors,
                city: this.state.city,
                state: this.state.state,
                pincode: this.state.pincode
            }
            this.props.addParkingPremise(newPremise, this.props.history);
            alert('Parking Premise Updated Successfully');
            console.log(this.state);
            // this.setState(initialState);
        }
        console.log("----------------submit button clicked------------------");
    }
    componentWillReceiveProps(nextProps) {

        const {
            id,
            parkingPremiseId,
            parkingPremiseName,
            premiseIdentifier,
            numberOfParkingFloors,
            city,
            state,
            pincode
        } = nextProps.parkingPremise;
        this.setState({
            id,
            parkingPremiseId,
            parkingPremiseName,
            premiseIdentifier,
            numberOfParkingFloors,
            city,
            state,
            pincode
        })
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(this.props.getPremise(id, this.props.history));
    }
    render() {
        return (
            <div className="parkingPremise">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <h5 className="display-4 text-center text-white">Update Parking Premise</h5>
                            <hr />
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                        name="parkingPremiseName"
                                        placeholder="Paking Premise Name"
                                        value={this.state.parkingPremiseName}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        className={classnames("form-control",
                                            { "is-invalid": this.state.parkingPremiseNameError })}
                                    />
                                    {
                                        <div className="text-danger">{this.state.parkingPremiseNameError}</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        name="premiseIdentifier"
                                        onChange={this.handleChange}
                                        value={this.state.premiseIdentifier}
                                        placeholder="Unique Project Identifier" disabled />
                                </div>
                                <div className="form-group">
                                    <input type="number"
                                        name="numberOfParkingFloors"
                                        placeholder="Number of Parking Floors"
                                        value={this.state.numberOfParkingFloors}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        className={classnames("form-control",
                                            { "is-invalid": this.state.numberOfParkingFloorsError })}
                                    />
                                    {
                                        <div className="text-danger">{this.state.numberOfParkingFloorsError}</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                        name="city"
                                        placeholder="City"
                                        value={this.state.city}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        className={classnames("form-control",
                                            { "is-invalid": this.state.cityError })}
                                    />
                                    {
                                        <div className="text-danger">{this.state.cityError}</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                        name="state"
                                        placeholder="State"
                                        value={this.state.state}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        className={classnames("form-control",
                                            { "is-invalid": this.state.stateError })}
                                    />
                                    {
                                        <div className="text-danger">{this.state.stateError}</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                        name="pincode"
                                        placeholder="Pincode"
                                        value={this.state.pincode}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        className={classnames("form-control",
                                            { "is-invalid": this.state.pincodeError })}
                                    />
                                    {
                                        <div className="text-danger">{this.state.pincodeError}</div>
                                    }
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
UpdateParkingPremise.propTypes = {
    getPremise: PropTypes.func.isRequired,
    addParkingPremise: PropTypes.func.isRequired,
    parkingPremise: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    parkingPremise: state.parkingPremises.parkingPremise,
    errors: state.errors
});
export default connect(mapStateToProps, { getPremise, addParkingPremise })(UpdateParkingPremise);