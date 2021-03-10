import axios from 'axios';
import {GET_ERRORS,GET_SLOTS, DELETE_SLOTS, GET_SLOT} from './type';

export const createSlots = (parking_slots,history)=> async dispatch=>
{
    try 
    {
       const res =await axios.post("http://localhost:8080/api/bookslot",parking_slots);
        history.push("/parkingSlotDashboard");
    } catch(errors){
        dispatch({
            type : GET_ERRORS,
            payload : errors.response.data
        });

    }
};

export const getSlots=() => async dispatch =>{
    const res = await axios.get("http://localhost:8080/api/veiw");
    dispatch({
        type:GET_SLOTS,
        payload:res.data
    });
}


export const deleteSlots= id => async dispatch =>{
    await axios.delete(`http://localhost:8080/api/deleteSlotById/${id}`);
    dispatch(
        {
            type : DELETE_SLOTS,
            payload :id
        }
    )

}

export const getSlot=(id,history) => async dispatch =>{
    const res = await axios.get(`http://localhost:8080/api/getSlotById/${id}`);
    dispatch({
        type:GET_SLOT,
        payload:res.data
    });
}