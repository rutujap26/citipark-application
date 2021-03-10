
import {DELETE_VEHICLE, GET_VEHICLE, GET_VEHICLES} from "../actions/type";
const initialState={
    vehicles:[],
    vehicle:{}
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_VEHICLES:
            return {
                ...state,
                vehicles:action.payload
            }
            case DELETE_VEHICLE:
                return{
                    ...state,
                    vehicles:state.vehicles.filter(
                        vehicle=>vehicle.floorNumber!=action.payload
                    )
                }
                case GET_VEHICLE:
                    return{
                        ...state,
                        vehicle:action.payload
                    }
            default:
                return state;

    }
}