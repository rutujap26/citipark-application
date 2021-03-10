import React, {Component } from 'react'
import FloorItem from './FloorItem'

import {connect} from 'react-redux';
import {getVehicles} from '../actions/FloorAction';
import PropTypes from 'prop-types';
import CreateFloorButton from './projects/CreateFloorButton';
import {Button} from 'react-bootstrap'
 class FloorDashboard extends Component{

    componentDidMount(){
        this.props.getVehicles();
    }
    render()
    {
        const {vehicles}=this.props.vehicles;
        return(
           
<div className="vehicles">
        <div className="container"
        // style={{
        //     backgroundImage:"url(weight.jpeg)",
        //     height:'100%',
        //     backgrundPosition:'center',
        //     backgroundRepeat:'no-repeat',
        //     flex:1,
        //     backgroundColor:'rgba(0,0,0,0.60'
        // }}
        >
        <div className="float-right">
               
                <Button variant="danger" href="/dashboard">Logout</Button>
                </div>
            <div className="row" >
                <div className="col-md-12">
                
                    <h1 className=" text-center font-weight:normal font-style: italic">PARKING FLOOR DETAILS</h1>
                    <br />
                   <CreateFloorButton/>
                    <br />
                    <hr />
  {/*--------------------------------form output method------------------------------- */}
       

  {/*--------------------------------Table output method------------------------------- */}

{
    <FloorItem data={vehicles}/>
}

  

                </div>
            </div>
        </div>
    </div>

          
        )
    }
}

FloorDashboard.propTypes={
    vehicles:PropTypes.object.isRequired,
    getVehicles:PropTypes.func.isRequired
}
const mapStateToProps=state=>({
    vehicles:state.vehicles
});
export default connect(mapStateToProps,{getVehicles})(FloorDashboard);