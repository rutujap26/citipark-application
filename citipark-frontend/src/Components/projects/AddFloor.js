import React, { Component } from 'react';

import {createVehicle} from '../../actions/FloorAction';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import classNames from 'classnames';


class AddFloor extends Component{
  constructor(props){
      super(props);
      this.state={
        floorNumber:"",
        numberOfParkingSlot:"",
        
          errors:{}
         
      }
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
        errors["floorNumberErr"]="floorNumber is required";
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


componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors:nextProps.errors})
    }
}
onSubmit(event)
{
    event.preventDefault();
    if (this.handleFormValidation()) {    
             const newVehicle={
                floorNumber:this.state.floorNumber,
                numberOfParkingSlot:this.state.numberOfParkingSlot
                
    }
    console.log(newVehicle);
    this.props.createVehicle(newVehicle,this.props.history);   
    alert('Your ParkingFloor  Data has been created successfully .')   
            } 
    
}
    render()
{
   
          
       
    const {floorNumberErr,numberOfParkingSlotErr}=this.state.errors;
    const {errors}=this.state;
    return(
        <div className="vehicle">
        <div className="container p-3 my-3 bg text-white "
        // style={{
        //     backgroundImage:"url(weight.jpeg)",
        //     height:'100%',
        //     backgroundPosition:'center',
        //     backgroundRepeat:'no-repeat',
        //     flex:1,
        //     backgroundColor:'rgba(0,0,0,0.60'
        // }}
        >
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4  text-center text-dark "> PARKING FLOOR  </h5>
                    <hr />
                    
                    <form onSubmit={this.onSubmit}   
                   
                    >
                    <h6 className="text-dark">ParkingFloor</h6>
                        <div className="form-group">
                            <input type="text" 
                            /*--------------front to back------------------------- */
                           className={classNames("form-control form-control-lg   ",{
                               "is-invalid":errors.floorNumber})
                           } 
                           /*------------------------------------------------ */

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
                            placeholder="Enter Parking Floor No" />
                            
                         
                           {floorNumberErr&&(
                                <div className="invalid-feedback">
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
                            placeholder="Enter No Of Parking Slots"
                                />
                              
                             {numberOfParkingSlotErr&&(
                                <div className="invalid-feedback">
                                    {numberOfParkingSlotErr}
                                    </div>
                            )}
                        </div>
                       
                        
                        
                      
                        <input type="submit" 
                        className="btn btn-success btn-block mt-4 alert alert-success " />
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
    )
}
}
AddFloor.propTypes={
    createVehicle: propTypes.func.isRequired,
    errors: propTypes.object.isRequired
}
const mapStateToProps=state=>({
    errors:state.errors
});
export default connect(mapStateToProps,{createVehicle})(AddFloor);