import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { deletePremise } from "../actions/ParkingPremiseActions";
import { connect } from "react-redux";

class ParkingPremise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingPremises: []
        }
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    onDeleteClick = (id) => {
        console.log('-------Delete Button Clicked-------' + id);
        this.props.deletePremise(id);
    }
    render() {
        const { parkingPremises } = this.props;
        return (
            <div className="">
                <div className="card-body">
                    <table className="table table-bordered table-hover table-sm table-responsive-md">
                        <thead className="thead-light">
                            <tr className="col-6">
                                <th>ParkingPremiseId</th>
                                <th>ParkingPremiseName</th>
                                <th>PremiseIdentifier</th>
                                <th>NumberOfParkingFloors</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Pincode</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.data.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.parkingPremiseId}</td>
                                            <td>{value.parkingPremiseName}</td>
                                            <td>{value.premiseIdentifier}</td>
                                            <td>{value.numberOfParkingFloors}</td>
                                            <td>{value.city}</td>
                                            <td>{value.state}</td>
                                            <td>{value.pincode}</td>
                                            <td>
                                                <Link to={`/updateParkingPremise/${value.premiseIdentifier}`} className="btn btn-info">Update</Link>
                                                <li
                                                    className="btn btn-danger delete"
                                                    onClick={this.onDeleteClick.bind(this, value.premiseIdentifier)}>
                                                    Delete
                                                </li>
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                        
                    </table>
                </div>
            </div>
        );
    }
}
ParkingPremise.propTypes = {
    deletePremise: PropTypes.func.isRequired
}
export default connect(null, { deletePremise })(ParkingPremise);