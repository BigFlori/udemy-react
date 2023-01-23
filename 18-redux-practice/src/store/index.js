import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartItems: [],
  totalPrice: 0,
  showCart: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem(state, action) {
      //payload tartalmazza a productot és az amountot
      state.totalPrice += action.payload.price * action.payload.amount;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        state.cartItems[existingCartItemIndex] = updatedItem;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem(state, action) {
      //payload tartalmazza a product id-t
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      state.totalPrice -= existingCartItem.price;
      if (existingCartItem.amount === 1) {
        state.cartItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        state.cartItems[existingCartItemIndex] = updatedItem;
      }
    },
    toggleCartVisibility(state) {
      state.showCart = !state.showCart;
    },
  },
});

const productsInitialState = {
  availableProducts: [
    {
      id: "t1",
      name: "Teszt",
      description: "This is a first product - amazing!",
      price: 6,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, products: productsSlice.reducer },
});

export default store;
export const cartActions = cartSlice.actions;
export const productsActions = productsSlice.actions;
