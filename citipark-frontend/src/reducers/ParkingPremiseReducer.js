import { GET_PARKING_PREMISES, GET_PARKING_PREMISE, DELETE_PREMISE } from "../actions/type";

const initialState = {
    parkingPremises: [],
    parkingPremise: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PARKING_PREMISES:
            return {
                ...state,
                parkingPremises: action.payload
            }
        case GET_PARKING_PREMISE:
            return {
                ...state,
                parkingPremise: action.payload
            }
        case DELETE_PREMISE:
            return {
                ...state,
                parkingPremises: state.parkingPremises.filter(
                    parkingPremise => parkingPremise.premiseIdentifier != action.payload
                )
            }
        default:
            return state;
    }
}