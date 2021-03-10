import React, { Component } from 'react'
import { deleteVehicle } from '../../src/actions/FloorAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';






class FloorItem extends Component {


    onDeleteClick = (parkingFloorId) => {
        console.log(parkingFloorId);
        this.props.deleteVehicle(parkingFloorId);
    }


    render() {
        const { vehicle } = this.props;
        return (
            <table className="table table-bordered table-dark">
                <thead>
                    <tr className="text-center ">
                        <th>S.No</th>
                        <th>floorNumber</th>
                        <th> No Of numberOfParkingSlot</th>
                
                        <th>Update </th>
                        <th>Delete </th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.data.map((value, index) => {
                        return (
                            <tr key={index} className="text-center">
                                <td>{value.parkingFloorId}</td>
                                <td>{value.floorNumber}</td>
                                <td>{value.numberOfParkingSlot}</td>




                                <td>
                                    <Link to={`/updateFloor/${value.parkingFloorId}`}>
                                        <button type="button" class="btn btn-success">UPDATE FLOOR</button>
                                    </Link>

                                </td>
                                <td>

                                    <button type="button" class="btn btn-danger"
                                        onClick={this.onDeleteClick.bind(this, value.parkingFloorId)}>DELETE FLOOR</button>
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
FloorItem.propTypes = {
    deleteVehicle: PropTypes.func.isRequired
}
export default connect(null, { deleteVehicle })(FloorItem);





