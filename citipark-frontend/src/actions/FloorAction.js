import axios from 'axios';
import {GET_ERRORS,GET_VEHICLES,DELETE_VEHICLE,GET_VEHICLE} from './type';

export const createVehicle=(vehicle,history)=> async dispatch=>{
    try{
        const res=await axios.post("http://localhost:8080/floor/api/create",vehicle);
        history.push("/floorDashboard");
    }catch(err){
        dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    });

    }
}
export const getVehicles=()=> async dispatch =>{
    const res=await axios.get("http://localhost:8080//floor/api/fetchallfloors");
    dispatch({
        type:GET_VEHICLES,
        payload:res.data
    });

}



export const deleteVehicle = parkingFloorId=>async dispatch =>{
    if(
        window.confirm("Are you sure to delete your Vehicledetails. ")
    ){
        await axios.delete(`http://localhost:8080/floor/api/delete/${parkingFloorId}`);
        window.location.reload();
        dispatch({
            type:DELETE_VEHICLE,
            payload:parkingFloorId
        });
    }
}


export const getVehicle=(parkingFloorId,history)=> async dispatch=>{
    const res=await axios.get(`http://localhost:8080/floor/api/fetchfloorbyid/${parkingFloorId}`);
    dispatch({
        type:GET_VEHICLE,
        payload:res.data
    });
}

export const updateVehicle = (vehicle,history)=>async dispatch =>{
    {
        await axios.put(`http://localhost:8080/floor/api/updatebyid`,vehicle);
        history.push("/floorDashboard")
    }
}