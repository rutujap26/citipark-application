import {DELETE_SLOTS, GET_SLOTS, GET_SLOT} from "../actions/type";
const initialState={
    slots:[],
    slot:{}
};

export default function(state=initialState, action){
    switch(action.type)
    {
        case GET_SLOTS:
            return{
                    ...state,
                    slots: action.payload
            }

        case DELETE_SLOTS:
            return{
                        ...state,
                        slots: state.slots.filter(
                            slots=>slots.parkingSlotId!=action.payload
                        )
                }
            case GET_SLOT:
            return{
                    ...state,
                    slot: action.payload
            }

            default:
                return state;
    }
}