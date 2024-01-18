import {
    ALL_REQUEST_BOOK_FAIL,
    ALL_REQUEST_BOOK_REQUEST,
    ALL_REQUEST_BOOK_SUCCESS,
    CLEAR_ERRORS,
    NEW_REQUEST_BOOK_FAIL,
    NEW_REQUEST_BOOK_REQUEST,
    NEW_REQUEST_BOOK_RESET,
    NEW_REQUEST_BOOK_SUCCESS
} from "../Constant/bookRequestConstant"

export const requestBookReducer = (state = { requestBooks: [] }, action) => {
    switch (action.type) {
        case ALL_REQUEST_BOOK_REQUEST:
            return {
                loading: true,
                requestBooks: []
            }
        case ALL_REQUEST_BOOK_SUCCESS:
            return {
                loading: false,
                requestBooks: action.payload.requestBooks,
                totalBooks: action.payload.totalBooks,
                resultPerPage: action.payload.resultPerPage,
                filteredBooks: action.payload.filteredBooks
            }
        case ALL_REQUEST_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }

}

export const newRequestBookReducer = (state = { requestBook: {} }, action) => {
    switch (action.type) {
        case NEW_REQUEST_BOOK_REQUEST:
            return {
                loading: true,
            }
        case NEW_REQUEST_BOOK_SUCCESS:
            return {
                loading: false,
                success: action.payload,
            }
        case NEW_REQUEST_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case NEW_REQUEST_BOOK_RESET:
            return {
                loading: false,
                requestBook: {}
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}