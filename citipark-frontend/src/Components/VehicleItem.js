import React, { Component } from 'react'
import { deleteWeightLog } from '../actions/VehicleAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class VehicleItem extends Component {


    onDeleteClick = (vehicleId) => {
        console.log(vehicleId);
        this.props.deleteWeightLog(vehicleId);
    }


    render() {
        const { weightLog } = this.props;
        return (
            <table className="table table-bordered table-dark">
                <thead>
                    <tr className="text-center ">
                        <th>S.No</th>
                        <th>vehicleNumber</th>
                        <th> vehicle Type</th>
                        <th>vehicle Company</th>
                        <th>vehicle Model</th>
                        <th>Update </th>
                        <th>Delete </th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.data.map((value, index) => {
                        return (
                            <tr key={index} className="text-center">
                                <td>{value.vehicleId}</td>
                                <td>{value.vehicleNumber}</td>
                                <td>{value.vehicleType}</td>

                                <td>{value.vehicleCompany}</td>
                                <td>{value.vehicleModel}</td>



                                <td>
                                    <Link to={`/updateVehicle/${value.vehicleId}`}>
                                        <button type="button" class="btn btn-success">UPDATE VEHICLE</button>
                                    </Link>

                                </td>
                                <td>

                                    <button type="button" class="btn btn-danger"
                                        onClick={this.onDeleteClick.bind(this, value.vehicleId)}>DELETE VEHICLE</button>
                                </td>

                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>

        );

    }
}


VehicleItem.propTypes = {
    deleteWeightLog: PropTypes.func.isRequired
}
export default connect(null, { deleteWeightLog })(VehicleItem);