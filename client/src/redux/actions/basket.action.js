import {
    TOGGLE_BASKET_VISIBLE,
    ADD_ITEM_BASKET,
    CLEAR_ITEM_FROM_BASKET,
    REMOVE_ITEM,
    CLEAR_BASKET
}  from '../actionTypes';

export const toggleCartHidden=() =>({
    type:TOGGLE_BASKET_VISIBLE,
})

export const addItemCart=(item) =>({
    type:ADD_ITEM_BASKET,
    payload:item
})

export const deleteItemCart=(item) =>({
    type:CLEAR_ITEM_FROM_BASKET,
    payload:item
})

export const removeItem=(item) =>({
    type:REMOVE_ITEM,
    payload:item
})

export const clearCart=()=>({
type:CLEAR_BASKET
})
