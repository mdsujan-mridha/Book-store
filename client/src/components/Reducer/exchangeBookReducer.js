import {
    ALL_EXCHANGE_BOOK_FAIL,
    ALL_EXCHANGE_BOOK_REQUEST,
    ALL_EXCHANGE_BOOK_SUCCESS,
    CLEAR_ERRORS,
    NEW_EXCHANGE_BOOK_REQUEST,
    NEW_EXCHANGE_BOOK_SUCCESS
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

     switch(action.type){

        case NEW_EXCHANGE_BOOK_REQUEST:
            return{
                loading:true
            }

        case NEW_EXCHANGE_BOOK_SUCCESS:
            return{
                
            }
            
         default:
         return state   

     }

}