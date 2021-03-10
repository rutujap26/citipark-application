import React, { Component } from 'react';

import {updateVehicle,getVehicle} from '../../actions/FloorAction';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import classNames from 'classnames';

class UpdateFloor extends Component{
  constructor(props){
      super(props);
      this.state={
        parkingFloorId:"",
        floorNumber:"",
        numberOfParkingSlot:"",
        
          errors:{}
         
      };
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
  
      this.initialState=this.state;
  }  
/*----------------react validation ------------------------*/
handleFormValidation(){
    const {floorNumber,numberOfParkingSlot}=this.state;
    let errors={};
    let formIsValid=true;
    if(!floorNumber){
        formIsValid=false;
        errors["floorNumberErr"]="floorNumber Id is required";
    }
        if(!numberOfParkingSlot){
        formIsValid=false;
        errors["numberOfParkingSlotErr"]="numberOfParkingSlot is required";
    }
    
        
       
    this.setState({errors:errors});
    return formIsValid;
}


/*------------------------------------------------------*/
onChange(event){
    this.setState({[event.target.name]:event.target.value}
        );
}

onSubmit(event)
{
    event.preventDefault();
    if (this.handleFormValidation()) {   
        const UpdateVehicle={
            parkingFloorId:this.state.parkingFloorId,
            floorNumber:this.state.floorNumber,
            numberOfParkingSlot:this.state.numberOfParkingSlot,
        }
        console.log(UpdateVehicle);
        this.props.updateVehicle(UpdateVehicle,this.props.history); 
                alert('Your Floor Data has been Updated successfully.')    
        //         this.setState(this.initialState)    
            } 
    
}

componentWillReceiveProps(nextProps){
    const {
        parkingFloorId,
        floorNumber,
        numberOfParkingSlot
        
    }=nextProps.vehicle;
    this.setState({
        parkingFloorId,
        floorNumber,
        numberOfParkingSlot
    })
}

componentDidMount(){
    const{parkingFloorId}=this.props.match.params;
    this.props.getVehicle(parkingFloorId,this.props.history);
}
    render()
{
     const {floorNumberErr,numberOfParkingSlotErr}=this.state.errors;
    const {errors}=this.state;
    return(
        <div className="vehicle">
        <div className="container p-3 my-3 bg text-white">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center text-dark">Update ParkingFloor</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>

                    <h6 className="text-dark">Parking Id</h6>
                    <input type="text"  
                           
                           className={classNames("form-control form-control-lg ")
                          } 
                           name="parkingFloorId"
                           value={this.state.parkingFloorId}
                           
                           onChange={this.onChange}
                           placeholder="Parking Floor Id"
                             /  >
                        
                    <h6 className="text-dark">floorNumber</h6>
                        <div className="form-group">
                            <input type="text" 
                            

                           /*--------------react validation part---------------- */
                            className={classNames("form-control form-control-lg   ",{
                                "is-invalid":floorNumberErr})
                            }
                            /*----------------------------------------------------- */
                            name="floorNumber"
                            value={this.state.floorNumber}

                            /*--------------react validation part---------------- */
                            
                            onChange={this.onChange}
                        /*-------------------------------------- */
                            placeholder="Enter the Floor number"/>
                           
                         
                           {floorNumberErr&&(
                                <div className="invalid-feedback" >
                                    {floorNumberErr}
                                    </div>
                            )}
                     

                        </div>
                        <h6 className="text-dark">numberOfParkingSlot</h6>
                        <div className="form-group">
                            <input type="text"  
                            
                            className={classNames("form-control form-control-lg ",{
                               "is-invalid":numberOfParkingSlotErr})
                           } 
                            name="numberOfParkingSlot"
                            value={this.state.numberOfParkingSlot}
                            
                            onChange={this.onChange}
                            placeholder="Enter No Parking Slots"
                                />
                              
                             {numberOfParkingSlotErr&&(
                                <div className="invalid-feedback">
                                    {numberOfParkingSlotErr}
                                    </div>
                            )}
                        </div>
                       
                        
                       
                      
                        <input type="submit" 
                        className="btn btn-success btn-block mt-4 " />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
}

UpdateFloor.propTypes={
    getVehicle: propTypes.func.isRequired,
    createVehicle:propTypes.func.isRequired,
    vehicle: propTypes.object.isRequired
}
const mapStateToProps=state=>({
    vehicle:state.vehicles.vehicle,
    errors:state.errors
});
export default connect(mapStateToProps,{getVehicle,updateVehicle})(UpdateFloor);