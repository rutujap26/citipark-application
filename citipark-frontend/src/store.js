import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware =[thunk];
let store;
if(window.navigator.userAgent.includes("Chrome")) {
    store = createStore(rootReducer,
    compose(applyMiddleware(...middleware),
    //window._REDUX_DEVTOOLS_EXTENSION_ ? window._REDUX_DEVTOOLS_EXTENSION_(): (a)->a
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
? a => a
: window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
}
else{
    store = createStore(rootReducer,
    compose(applyMiddleware(...middleware)
    ));
}
export default store;