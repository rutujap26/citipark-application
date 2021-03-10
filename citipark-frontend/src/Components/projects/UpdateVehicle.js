import React, { Component } from 'react';

import {updateWeightLog,getWeightLog} from '../../actions/VehicleAction';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import classNames from 'classnames';

class UpdateVehicle extends Component{
  constructor(props){
      super(props);
      this.state={
        vehicleId:"",
        vehicleNumber:"",
        vehicleType:"",
        vehicleCompany:"",
        vehicleModel:"",
          errors:{}
         
      };
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
  
      this.initialState=this.state;
  }  

handleFormValidation(){
    const {vehicleNumber,vehicleType,vehicleCompany,vehicleModel}=this.state;
    let errors={};
    let formIsValid=true;
    if(!vehicleNumber){
        formIsValid=false;
        errors["vehicleNumberErr"]="vehicleNumber Id is required";
    }
    else
         if(vehicleNumber.length<8 || vehicleNumber.length>13)
        {
            formIsValid = false;    
        errors["vehicleNumberErr"] = "vehicleNumber must be like this TN 02 AA 4757";
        }
    
    else {    
        var pattern = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/;    
        if (!pattern.test(vehicleNumber)) {    
            formIsValid = false;    
            errors["vehicleNumberErr"] = "VehicleNumber must contains only numberPlate number  ";    
        }    
    }

    if(!vehicleType){
        formIsValid=false;
        errors["vehicleTypeErr"]="vehicleType is required";
    }
    else
    {

  
        var pattern =/^[2,3,4]{1}$/;
        if(!pattern.test(vehicleType))
        {
            formIsValid = false;    
            errors["vehicleTypeErr"] = "vehicleType must contain only 2or 3 or 4";
        }
    }
        if(!vehicleCompany){
            formIsValid=false;
            errors["vehicleCompanyErr"]="vehicleCompany is required";
        }
        
        else
        {
            var pattern = /^[a-zA-Z]{2,10}$/
            if(!pattern.test(vehicleCompany))
            {
                formIsValid = false;
                errors["vehicleCompanyErr"]="Enter the valid Vehicle Company Name";
            }
        }
        if(!vehicleModel){
            formIsValid=false;
            errors["vehicleModelErr"]="vehicleType is required";
        }
        else
        {
            var pattern = /^[a-zA-Z0-9]{2,10}$/
            if(!pattern.test(vehicleModel))
            {
                formIsValid = false;
                errors["vehicleModelErr"]="Enter the valid Vehicle Model Name";
            }
        }
    this.setState({errors:errors});
    return formIsValid;
}



onChange(event){
    this.setState({[event.target.name]:event.target.value}
        );
}

onSubmit(event)
{
    event.preventDefault();
    if (this.handleFormValidation()) {   
        const UpdateVehicle={
            vehicleId:this.state.vehicleId,
            vehicleNumber:this.state.vehicleNumber,
            vehicleType:this.state.vehicleType,
            vehicleCompany:this.state.vehicleCompany,
            vehicleModel:this.state.vehicleModel,
        }
        console.log(UpdateVehicle);
        this.props.updateWeightLog(UpdateVehicle,this.props.history); 
                alert('Your Vehicle Data has been Updated successfully.')    
        //         this.setState(this.initialState)    
            } 
    
}

componentWillReceiveProps(nextProps){
    const {
        vehicleId,
        vehicleNumber,
        vehicleType,
        vehicleCompany,
        vehicleModel
    }=nextProps.weightLog;
    this.setState({
        vehicleId,
        vehicleNumber,
        vehicleType,
        vehicleCompany,
        vehicleModel
    })
}

componentDidMount(){
    const{vehicleId}=this.props.match.params;
    this.props.getWeightLog(vehicleId,this.props.history);
}
    render()
{
     const {vehicleNumberErr,vehicleTypeErr,vehicleCompanyErr,vehicleModelErr}=this.state.errors;
    const {errors}=this.state;
    return(
        <div className="weightLog">
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Update Vehicle Form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>

                    <h6>Vehicle Id</h6>
                    <input type="text"  
                           
                           className={classNames("form-control form-control-lg ")
                          } 
                           name="vehicleId"
                           value={this.state.vehicleId}
                           
                           onChange={this.onChange}
                           placeholder="Vehicle Id"
                            disabled   />
                        
                    <h6>vehicle Number</h6>
                        <div className="form-group">
                            <input type="text" 
                            

                           /*--------------react validation part---------------- */
                            className={classNames("form-control form-control-lg   ",{
                                "is-invalid":vehicleNumberErr})
                            }
                            /*----------------------------------------------------- */
                            name="vehicleNumber"
                            value={this.state.vehicleNumber}

                            /*--------------react validation part---------------- */
                            
                            onChange={this.onChange}
                        /*-------------------------------------- */
                            placeholder="Enter the Vehicle number"/>
                           
                         
                           {vehicleNumberErr&&(
                                <div className="invalid-feedback" >
                                    {vehicleNumberErr}
                                    </div>
                            )}
                     

                        </div>
                        <h6>vehicle Type</h6>
                        <div className="form-group">
                            <input type="text"  
                           
                            className={classNames("form-control form-control-lg ",{
                               "is-invalid":vehicleTypeErr})
                           } 
                            name="vehicleType"
                            value={this.state.vehicleType}
                            
                            onChange={this.onChange}
                            placeholder="Enter the VehicleType"
                                />
                              
                             {vehicleTypeErr&&(
                                <div className="invalid-feedback">
                                    {vehicleTypeErr}
                                    </div>
                            )}
                        </div>
                       
                        
                        <h6>Vehicle Company</h6>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control form-control-lg" 
                            name="vehicleCompany"
                            value={this.state.vehicleCompany}
                            onChange={this.onChange} 
                            placeholder="Enter the Vehicle Company"
                            />
                            {vehicleCompanyErr&&(
                                <div className="invalid-feedback">
                                    {vehicleCompanyErr}
                                    </div>
                            )}
                            
                            
                        </div>
                        <h6>vehicle Model</h6>
                        <div className="form-group">
                            <input type="text"
                             className="form-control form-control-lg" 
                             name="vehicleModel"
                             value={this.state.vehicleModel}
                             onChange={this.onChange} 
                             placeholder="Enter the Vehicle Model"
                             />
                             {vehicleModelErr&&(
                                <div className="invalid-feedback">
                                    {vehicleModelErr}
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

UpdateVehicle.propTypes={
    getWeightLog: propTypes.func.isRequired,
    createWeightLog:propTypes.func.isRequired,
    weightLog: propTypes.object.isRequired
}
const mapStateToProps=state=>({
    weightLog:state.weightLogs.weightLog,
    errors:state.errors
});
export default connect(mapStateToProps,{getWeightLog,updateWeightLog})(UpdateVehicle);