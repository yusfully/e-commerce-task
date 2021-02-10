import React, { createContext, useReducer, useContext, useState, useEffect } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';

const ProductsContext = createContext();
export const ActionTypes = {
  onFilterChange: 'onFilterChange',
  onSortingChange: 'onSortingChange',
  onPageChange: 'onPageChange',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.onFilterChange:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterBy]: action.payload.value,
        },
      };

    case ActionTypes.onSortingChange:
      return {
        ...state,
        sorting: action.payload,
      };

    case ActionTypes.onPageChange:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
const initial = {
  filters: {
    manufacturer: [],
    tags: [],
  },
  sorting: {
    price: 'low',
  },
  currentPage: 1,
};

export const ProductsProvider = ({ children, products }) => {
  const category = useParams();
  const history = useHistory();
  const match = useRouteMatch();
  const [showProducts, setShowProducts] = useState();
  const [categories, setCategories] = useState();
  const [currentCategory, setCurrentCategory] = useState(category.category);
  const [productsState, dispatchProducts] = useReducer(reducer, initial);

  useEffect(() => {
    if (showProducts) {
      debugger;
      const filt = multiPropsFilter(products[currentCategory], productsState.filters, productsState.sorting);

      setShowProducts(filt);
      dispatchProducts({ type: 'onPageChange', payload: 1 });
    }
  }, [productsState.filters]);

  useEffect(() => {
    if (showProducts) {
      let sorted = sort(showProducts.products, productsState.sorting);
      let newSorted = {
        ...showProducts,
        products: sorted,
      };
      setShowProducts(newSorted);
    }
  }, [productsState.sorting, currentCategory]);

  useEffect(() => {
    const path = match.path.split(':')[0];
    history.push(path + `${currentCategory}`);
    if (products) {
      const category = Object.keys(products).map((element) => element);
      setCategories(category);
    }
    if (currentCategory && products) {
      const filt = multiPropsFilter(products[currentCategory], productsState.filters, productsState.sorting);
      setShowProducts(filt);
    }
  }, [currentCategory, products]);

  return (
    <ProductsContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        categories,
        products,
        showProducts,
        productsState,
        dispatchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);

const multiPropsFilter = (products, filters, sorting) => {
  const filterKeys = Object.keys(filters);
  const counts = filterKeys.reduce(function (filteredObj, item) {
    filterKeys.map((keyFilter) => {
      if (keyFilter === item) return false;

      filteredObj[keyFilter] = products
        .filter((product) => {
          if (!filters[item].length) return true;
          return filter(product, item, { [item]: filters[item] });
        })
        .reduce(function (Oposites, el) {
          if (Array.isArray(el[keyFilter])) {
            el[keyFilter].map((arrEl) => {
              Oposites[arrEl]
                ? (Oposites[arrEl]['count'] = Oposites[arrEl].count + 1)
                : (Oposites[arrEl] = {
                    text: arrEl,
                    value: arrEl.toLowerCase(),
                    count: 1,
                  });
            });
          } else {
            Oposites[el[keyFilter]]
              ? (Oposites[el[keyFilter]]['count'] = Oposites[el[keyFilter]].count + 1)
              : (Oposites[el[keyFilter]] = {
                  text: el[keyFilter],
                  value: el[keyFilter].toLowerCase(),
                  count: 1,
                });
          }

          return Oposites;
        }, {});
    });
    return filteredObj;
  }, {});

  const productsFiltered = products.filter((product) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true;

      return filter(product, key, filters);
    });
  });

  return {
    products: sort(productsFiltered, sorting),
    ...counts,
    total: productsFiltered.length,
  };
};

function filter(product, key, filters) {
  if (Array.isArray(product[key])) {
    return product[key].some((keyEle) => filters[key].includes(keyEle.toLowerCase()));
  }

  return filters[key].includes(product[key].toLowerCase());
}

function sort(sortArr, sortType) {
  return sortArr.sort((a, b) => {
    if (a[Object.keys(sortType)[0]] < b[Object.keys(sortType)[0]])
      return sortType[Object.keys(sortType)[0]] === 'low' ? -1 : 1;
    else if (a[Object.keys(sortType)[0]] > b[Object.keys(sortType)[0]])
      return sortType[Object.keys(sortType)[0]] === 'low' ? 1 : -1;
    else return 0;
  });
}
