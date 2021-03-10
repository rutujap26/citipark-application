import React, {Component } from 'react'
import VehicleItem from './VehicleItem'

import {connect} from 'react-redux';
import {getWeightLogs} from '../actions/VehicleAction';
import PropTypes from 'prop-types';
import CreateVehicleButton from './projects/CreateVehicleButton';
import {Button} from 'react-bootstrap'
 class VehicleDashboard extends Component{

    componentDidMount(){
        this.props.getWeightLogs();
    }
    render()
    {
        const {weightLogs}=this.props.weightLogs;
        return(
           
<div className="weightLogs">
        <div className="container vDash"
        // style={{
        //     backgroundImage:"url(weight.jpeg)",
        //     height:'100%',
        //     backgroundPosition:'center',
        //     backgroundRepeat:'no-repeat',
        //     flex:1,
        //     backgroundColor:'rgba(0,0,0,0.60'
        // }}
        >
            <div className="row" >
                <div className="col-md-12">
                <div className="float-right">
               
                <Button variant="danger" href="/dashboard">Logout</Button>
                </div>
                
                    <h1 className=" text-center font-weight:normal font-style: italic">VEHICLE DETAILS</h1>
                    <br />
                   <CreateVehicleButton/>
                    <br />
                    <hr />
  {/*--------------------------------form output method------------------------------- */}
       

  {/*--------------------------------Table output method------------------------------- */}

{
    <VehicleItem data={weightLogs}/>
}

  

                </div>
            </div>
        </div>
    </div>

          
        )
    }
}

VehicleDashboard.propTypes={
    weightLogs:PropTypes.object.isRequired,
    getWeightLogs:PropTypes.func.isRequired
}
const mapStateToProps=state=>({
    weightLogs:state.weightLogs
});
export default connect(mapStateToProps,{getWeightLogs})(VehicleDashboard);