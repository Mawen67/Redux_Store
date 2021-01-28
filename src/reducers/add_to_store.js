import {ADD_FOOD} from '../constants/ActionTypes' //action utilisée par le reducer

const add_to_store = (state = [], action) => {
    switch (action.type) {
        case ADD_FOOD:
            return [...state, action.name]
        default:
            return state
    }
}

export default add_to_store