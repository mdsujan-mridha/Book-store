import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer } from "./components/Reducer/userReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";


const reducer = combineReducers({
    user: userReducer,
});

let initialState = {};
const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);



export default store;