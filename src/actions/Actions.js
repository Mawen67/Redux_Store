import * as types from '../constants/ActionTypes'

export const addFood = (text, price) => ({
    type: types.ADD_FOOD,
    text,
    price,
})

export const buyFood = (id, price) => ({
    type: types.BUY_FOOD,
    id,
    price,
})

export const deleteFood = (id, price) => ({
    type: types.DELETE_FOOD,
    id,
    price,
})