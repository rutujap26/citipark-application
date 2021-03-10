import React from 'react';
import {Link} from 'react-router-dom';
const CreateFloorButton=()=>{
    return(
<React.Fragment>

        <Link to="addFloor" className=" btn btn-success btn-lg">
            Add ParkingFloor
        </Link>
    
    </React.Fragment>
    );
}
export default CreateFloorButton;