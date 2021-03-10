import {combineReducers} from 'redux';
import SlotsReducer from "./SlotsReducer";
import ErrorReducer from "./ErrorReducer";
import ParkingPremiseReducer from "./ParkingPremiseReducer";
import VehicleReducer from './VehicleReducer';
import FloorReducer from './FloorReducer'
export default combineReducers({
    slots:SlotsReducer,
    errors: ErrorReducer,
    parkingPremises: ParkingPremiseReducer,
    weightLogs:VehicleReducer,
    vehicles:FloorReducer
});