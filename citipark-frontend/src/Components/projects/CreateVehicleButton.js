import React from 'react';
import {Link} from 'react-router-dom';
const CreateVehicleButton=()=>{
    return(
<React.Fragment>

        <Link to="addVehicle" className=" btn btn-success btn-lg">
            CREATE VEHICLE
        </Link>
    
    </React.Fragment>
    );
}
export default CreateVehicleButton;