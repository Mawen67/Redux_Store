import {combineReducers} from 'redux'

import add_to_panier from './add_to_panier'
import add_to_store from './add_to_store'

//Regroupe tous les reducers

const rootReducer = combineReducers({
    add_to_panier,
    add_to_store,
})

export default rootReducer