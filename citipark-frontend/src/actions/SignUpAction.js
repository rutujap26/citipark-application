import axios from 'axios';
import { GET_ERRORS, GET_USER } from './type';

export const addUser = (user, history) => async dispatch => {

    try {
        const res = await axios.post("http://localhost:8080/api/adduser", user);
        history.push("/Login");
       
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const getUser = (user, history) => async (dispatch) => {
    try {
        let userName = user.userName;
        let password = user.password;
        if (userName === 'admin123' && password === 'Adminlogin@12') {
            console.log(user);
            history.push("/adminComponent");
        }
        else {
            const re = await axios.get("http://localhost:8080/user/login/" + userName + "/" + password);
            console.log(re.data);
            history.push("/userDashboard");
            dispatch({
                type:GET_USER,
                payload:re.data
            })
        }
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data

        });
    }
}
