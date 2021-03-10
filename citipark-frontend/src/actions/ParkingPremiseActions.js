import axios from "axios";
import { GET_ERRORS, GET_PARKING_PREMISES, GET_PARKING_PREMISE, DELETE_PREMISE} from "./type";

export const addParkingPremise = (premise, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/parkingPremise", premise);
        history.push("/adminComponent");
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getPremises = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/parkingPremise/all");
    dispatch({
        type: GET_PARKING_PREMISES,
        payload: res.data
    });
}

export const getPremise = (id, history) => async dispatch => {
    const res = await axios.get(`http://localhost:8080/api/parkingPremise/getByIdentifier/${id}`);
    dispatch({
        type: GET_PARKING_PREMISE,
        payload: res.data
    });
}

export const deletePremise = (id) => async dispatch => {
    if (
        window.confirm("Are you sure? This will delete the parking premise and the data related to it.")
    ) {
        await axios.delete(`http://localhost:8080/api/parkingPremise/delete/${id}`);
        dispatch({
            type: DELETE_PREMISE,
            payload: id
        });
    }
}