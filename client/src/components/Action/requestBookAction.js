import axios from "axios"
import {
    ALL_REQUEST_BOOK_FAIL,
    ALL_REQUEST_BOOK_REQUEST,
    ALL_REQUEST_BOOK_SUCCESS
} from "../Constant/bookRequestConstant"


export const getAllRequestBooks = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_REQUEST_BOOK_REQUEST
        })
        const { data } = await axios.get(`http://localhost:5000/api/v1/request/books`)
        dispatch({
            type: ALL_REQUEST_BOOK_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_REQUEST_BOOK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}