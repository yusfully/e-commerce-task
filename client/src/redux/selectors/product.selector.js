import {createSelector} from 'reselect';


const selectCollection =state=>state.products;


export const selectProducts=createSelector(
    [selectCollection],
    products=>products.products
)
export const selectProductsCount=createSelector(
    [selectCollection],
    products=>products.total
)
export const selectProductsPage=createSelector(
    [selectCollection],
    products=>products.actualPage
)
