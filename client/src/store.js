import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer } from "./components/Reducer/userReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { newSellBookReducer, newSellDetailsReducer, sellBookReducer } from "./components/Reducer/sellBookReducer";
import { newRequestBookReducer, requestBookReducer } from "./components/Reducer/requestBookReducer";
import { exchangeBookReducer, newExchangeBookReducer } from "./components/Reducer/exchangeBookReducer";
import { cartReducer } from "./components/Reducer/cartReducer";


const reducer = combineReducers({
    user: userReducer,
    sellBooks: sellBookReducer,
    sellBook: newSellBookReducer,
    book: newSellDetailsReducer,
    requestBooks: requestBookReducer,
    requestBook: newRequestBookReducer,
    exchangeBooks: exchangeBookReducer,
    exchangeBook: newExchangeBookReducer,
    sellBookDetails: newSellDetailsReducer,
    cart: cartReducer,
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ?
            JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
};

const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)),
);



export default store;