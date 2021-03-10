import React from 'react';
import ParkingPremise from './ParkingPremise';
import { Link } from "react-router-dom";
import { getPremises } from "../actions/ParkingPremiseActions";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

class AdminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            parkingPremises: []
        }
    }
    componentDidMount() {
        this.props.getPremises();
    }
    render() {
        const { parkingPremises } = this.props.parkingPremises;
        return (
            <div className="admin" id="grad">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h1 className="display-4 text-center"><b>Parking Premises</b></h1>
                            <hr />
                            <div>
                                <Link to="/addParkingPremise" className="btn btn-lg btn-info">
                                    Add Parking Premise
                                </Link>
                            
                            
                            <Link to="/floorDashboard" className="btn btn-lg btn-info float-right">
                                 Parking Floor
                            </Link>
                            </div>
                        
                            <br />
                            <br />
                            {
                                <ParkingPremise data={parkingPremises} />
                            }
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
AdminComponent.propTypes = {
    parkingPremises: PropTypes.object.isRequired,
    getPremises: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    parkingPremises: state.parkingPremises
});
export default connect(mapStateToProps, { getPremises })(AdminComponent);