export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCardItem = cartItems.find((cartItem) => cartItem.added === cartItemToAdd.added);

  if (existingCardItem) {
    return cartItems.map((cartItem) =>
      cartItem.added === cartItemToAdd.added ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.added === cartItemToRemove.added);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.added !== cartItemToRemove.added);
  }
  return cartItems.map((cartItem) =>
    cartItem.added === cartItemToRemove.added ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
  );
};
