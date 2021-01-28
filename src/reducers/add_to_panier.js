import {BUY_FOOD} from '../constants/ActionTypes' //action utilisée par le reducer

const add_to_panier = (state = [], action) => {
    switch (action.type) {
        case BUY_FOOD:
            return [...state, action.id] //renvoie un nouvel objet
        default:
            return state
    }
}

export default add_to_panier