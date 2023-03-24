import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

type CartState = {
  data: ProductProps[];
};

const initialState = {
  data: [],
} as CartState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductProps>) => {
      const { payload } = action;

      const findItem = state.data.find((item) => item.id === payload.id);

      if (!!findItem) {
        state;
      } else {
        state.data.push(payload);
      }
    },
    deleteProductFromCart: (
      state,
      action: PayloadAction<Partial<ProductProps>>
    ) => {
      const { payload } = action;

      const deleteItem = state.data.filter((item) => item.id !== payload.id);

      state.data = deleteItem;
    },
  },
});

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
