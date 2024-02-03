import axios from "axios"
import {
    ALL_EXCHANGE_BOOK_FAIL,
    ALL_EXCHANGE_BOOK_REQUEST,
    ALL_EXCHANGE_BOOK_SUCCESS,
    CLEAR_ERRORS,
    NEW_EXCHANGE_BOOK_FAIL,
    NEW_EXCHANGE_BOOK_REQUEST,
    NEW_EXCHANGE_BOOK_SUCCESS
} from "../Constant/exchangeBookConstant"

export const getAllExchangeBooks = (category, currentPage) => async (dispatch) => {

    try {
        dispatch({
            type: ALL_EXCHANGE_BOOK_REQUEST
        })

        let link = `http://localhost:5000/api/v1/exchangebooks?page=${currentPage}`
        if (category) {
            link = `http://localhost:5000/api/v1/exchangebooks?page=${currentPage}&category=${category}`
        }

        const { data } = await axios.get(link)
        dispatch({
            type: ALL_EXCHANGE_BOOK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_EXCHANGE_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}
// post new exchange book 
export const postNewExchangeBook = (exchangeBookData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_EXCHANGE_BOOK_REQUEST })
        const { data } = await axios.post(`http://localhost:5000/api/v1/exchangebook`, exchangeBookData)
        dispatch({
            type: NEW_EXCHANGE_BOOK_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_EXCHANGE_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}