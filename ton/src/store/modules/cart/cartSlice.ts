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
    fetch: (state, action: PayloadAction<ProductProps>) => {
      console.log(
        {
          state,
          action,
        },
        'STATE AND ACTION'
      );
    },
  },
});

export const { fetch } = cartSlice.actions;

export default cartSlice.reducer;
