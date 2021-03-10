import React, { Component } from 'react';

import {createWeightLog} from '../../actions/VehicleAction';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import classNames from 'classnames';

class AddVehicle extends Component{
  constructor(props){
      super(props);
      this.state={
        vehicleNumber:"",
        vehicleType:"",
        vehicleCompany:"",
        vehicleModel:"",
          errors:{}
         
      }
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
        errors["vehicleNumberErr"]="vehicleNumber is required";
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
            errors["vehicleTypeErr"] = "vehicleType must contain only  2 or 3 or 4";
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


componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors:nextProps.errors})
    }
}
onSubmit(event)
{
    event.preventDefault();
    if (this.handleFormValidation()) {    
             const newWeightLog={
                vehicleNumber:this.state.vehicleNumber,
                vehicleType:this.state.vehicleType,
                vehicleCompany:this.state.vehicleCompany,
                vehicleModel:this.state.vehicleModel
    }
    console.log(newWeightLog);
    this.props.createWeightLog(newWeightLog,this.props.history);   
    alert('Your vehicle  Data has been created successfully .')   
            } 
    
}
    render()
{
   
          
       
    const {vehicleNumberErr,vehicleTypeErr,vehicleCompanyErr,vehicleModelErr}=this.state.errors;
    const {errors}=this.state;
    return(
        <div className="weightLog vDash">
        <div className="container p-3 my-3 bg text-dark "
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
                    <h1 className="display-4  text-center text-light" ><b> VEHICLE FORM</b></h1>
                    <hr />
                    
                    <form onSubmit={this.onSubmit}   
                   
                    >
                    <h3 className="text-light">vehicle Number</h3>
                        <div className="form-group">
                            <input type="text" 
                            /*--------------front to back------------------------- */
                           className={classNames("form-control form-control-lg   ",{
                               "is-invalid":errors.vehicleNumber})
                           } 
                           /*------------------------------------------------ */

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
                            placeholder="Enter the Vehicle number" />
                            
                         
                           {vehicleNumberErr&&(
                                <div className="invalid-feedback">
                                    {vehicleNumberErr}
                                    </div>
                            )}
                     

                        </div>
                        <h3 className="text-light">vehicleType</h3>
                        <div className="form-group">
                            <input type="text"  
                            
                            className={classNames("form-control form-control-lg ",{
                               "is-invalid":vehicleTypeErr})
                           } 
                            name="vehicleType"
                            value={this.state.vehicleType}
                            
                            onChange={this.onChange}
                            placeholder="Enter the Vehicle Type"
                                />
                              
                             {vehicleTypeErr&&(
                                <div className="invalid-feedback">
                                    {vehicleTypeErr}
                                    </div>
                            )}
                        </div>
                       
                        
                        <h3 className="text-light">Vehicle Company</h3>
                        <div className="form-group">
                            <input type="text" 
                            className={classNames("form-control form-control-lg   ",{
                                "is-invalid":vehicleCompanyErr})
                            }
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
                        <h3 className="text-light">vehicle Model</h3>
                        <div className="form-group">
                            <input type="text" 
                            className={classNames("form-control form-control-lg   ",{
                                "is-invalid":vehicleModelErr})
                            }
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
                        className="btn btn-success btn-block mt-4 alert alert-success " />
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
    )
}
}
AddVehicle.propTypes={
    createWeightLog: propTypes.func.isRequired,
    errors: propTypes.object.isRequired
}
const mapStateToProps=state=>({
    errors:state.errors
});
export default connect(mapStateToProps,{createWeightLog})(AddVehicle);