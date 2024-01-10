import axios from "axios"
import {
    ALL_SELL_BOOK_FAIL,
    ALL_SELL_BOOK_REQUEST,
    ALL_SELL_BOOK_SUCCESS,
    CLEAR_ERRORS,
    NEW_SELL_BOOK_FAIL,
    NEW_SELL_BOOK_REQUEST,
    NEW_SELL_BOOK_SUCCESS
} from "../Constant/sellBookConstant"


export const getAllSellBooks = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_SELL_BOOK_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/books`)
        dispatch({
            type: ALL_SELL_BOOK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_SELL_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

// post new sell book 
export const postNewSellBook = (sellBookData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_SELL_BOOK_REQUEST })
         console.log(sellBookData)
        const  data  = await axios.post(`http://localhost:5000/api/v1/book/sell`, sellBookData)
        dispatch({
            type: NEW_SELL_BOOK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NEW_SELL_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
};


// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}