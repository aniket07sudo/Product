
const initialState = {
    showModal:false,
    productData:[]
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case "GET_DATA":
            return {
                ...state,
                productData:action.data
            }
        default:
            return initialState
    }
}

export default reducer;