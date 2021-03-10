import axios from 'axios';
import {GET_ERRORS,GET_WEIGHTLOGS,DELETE_WEIGHTLOG,GET_WEIGHTLOG} from './type';

export const createWeightLog=(weightLog,history)=> async dispatch=>{
    try{
        const res=await axios.post("http://localhost:8080/vehicle/add",weightLog);
        history.push("/parkingSlotDashboard");
    }catch(err){
        dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    });

    }
}
export const getWeightLogs=()=> async dispatch =>{
    const res=await axios.get("http://localhost:8080/vehicle/veiw");
    dispatch({
        type:GET_WEIGHTLOGS,
        payload:res.data
    });

}



export const deleteWeightLog = vehicleId=>async dispatch =>{
    if(
        window.confirm("Are you sure to delete your vehicle details. ")
    ){
        await axios.delete(`http://localhost:8080/vehicle/deleteById/${vehicleId}`);
        window.location.reload();
        dispatch({
            type:DELETE_WEIGHTLOG,
            payload:vehicleId
        });
    }
}


export const getWeightLog=(vehicleId,history)=> async dispatch=>{
    const res=await axios.get(`http://localhost:8080/vehicle/findVehicle/${vehicleId}`);
    dispatch({
        type:GET_WEIGHTLOG,
        payload:res.data
    });
}

export const updateWeightLog = (weightLog,history)=>async dispatch =>{
    {
        await axios.put(`http://localhost:8080/vehicle/modifyTheVehicle`,weightLog);
        history.push("/vehicleDashboard")
    }
}