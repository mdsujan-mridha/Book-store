import {
    ALL_EXCHANGE_BOOK_FAIL,
    ALL_EXCHANGE_BOOK_REQUEST,
    ALL_EXCHANGE_BOOK_SUCCESS,
    CLEAR_ERRORS,
    NEW_EXCHANGE_BOOK_FAIL,
    NEW_EXCHANGE_BOOK_REQUEST,
    NEW_EXCHANGE_BOOK_RESET,
    NEW_EXCHANGE_BOOK_SUCCESS,
    NEW_EXCHANGE_DETAILS_FAIL,
    NEW_EXCHANGE_DETAILS_REQUEST,
    NEW_EXCHANGE_DETAILS_SUCCESS
} from "../Constant/exchangeBookConstant"


export const exchangeBookReducer = (state = { exchangeBooks: [] }, action) => {

    switch (action.type) {
        case ALL_EXCHANGE_BOOK_REQUEST:
            return {
                loading: true,
                exchangeBooks: []
            }
        case ALL_EXCHANGE_BOOK_SUCCESS:
            return {
                loading: false,
                exchangeBooks: action.payload.exchangeBooks,
                totalBooks: action.payload.totalBooks,
                resultPerPage: action.payload.resultPerPage,
                filteredBooks: action.payload.filteredBooks
            }
        case ALL_EXCHANGE_BOOK_FAIL:
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

export const newExchangeBookReducer = (state = { exchangeBook: {} }, action) => {

    switch (action.type) {

        case NEW_EXCHANGE_BOOK_REQUEST:
            return {
                loading: true
            }

        case NEW_EXCHANGE_BOOK_SUCCESS:
            return {
                loading: false,
                exchangeBook: action.payload
            }
        case NEW_EXCHANGE_BOOK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case NEW_EXCHANGE_BOOK_RESET:
            return {
                loading: false,
                exchangeBook: {}
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

export const newExchangeDetailsReducer = (state = { exchangeBook: {} }, action) => {
    switch (action.type) {
        case NEW_EXCHANGE_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case NEW_EXCHANGE_DETAILS_SUCCESS:
            return {
                loading: false,
                exchangeBook: action.payload
            }
        case NEW_EXCHANGE_DETAILS_FAIL:
            return {
           
                loading: false,
                error: action.payload
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