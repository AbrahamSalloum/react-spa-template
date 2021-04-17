const initialState = {
    counter: 0,
    message: ""
}


export default function aReducer(state=initialState, action){
    switch(action.type){
        case "INC_COUNT": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }

        case "DEC_COUNT": {
            return {
                ...state,
                counter: state.counter -1
            }
        }

        case "SET_MESSAGE": {
            const message = action.payload
            return {
                ...state,
                message: message
            }
        }

        default: {
            return state
        }
    }
}
