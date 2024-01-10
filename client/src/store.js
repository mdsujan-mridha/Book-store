import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer } from "./components/Reducer/userReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { newSellBookReducer, sellBookReducer } from "./components/Reducer/sellBookReducer";


const reducer = combineReducers({
    user: userReducer,
    sellBooks: sellBookReducer,
    sellBook: newSellBookReducer,
});

let initialState = {};
const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)),
);



export default store;