import React from "react";
import { ProductsProvider } from "./Provider";
import ProductsMain  from "./ProductsMain";
import {connect} from 'react-redux';
import {selectProducts} from '../../redux/selectors/product.selector'
import {createStructuredSelector} from 'reselect';
const ProductsPage = (
  { products},

) => {
  return (
    <ProductsProvider products={products}>
     <ProductsMain ></ProductsMain>
    </ProductsProvider>
  );
};
const mapStateToProps=createStructuredSelector({
  products:selectProducts,

})
export default connect(mapStateToProps,null)(ProductsPage)
