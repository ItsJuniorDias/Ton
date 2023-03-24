import React, { useEffect, useReducer } from 'react';
import api from '../services/api';

enum ProductActionEnum {
  FETCH = 'FETCH',
  LOADING = 'LOADING',
}

type ProductAction = {
  type: 'FETCH' | 'LOADING';
  payload?: {};
};

type ProductProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

type ProductState = {
  loading: boolean;
  data: ProductProps[];
};

const reducer = (state: ProductState, action: ProductAction): ProductState => {
  const { type, payload } = action;

  switch (type) {
    case ProductActionEnum.FETCH:
      return {
        ...state,
        ...payload,
      };
    case ProductActionEnum.LOADING:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export const useFetchProducts = () => {
  const [dataProducts, dispatchDataProducts] = useReducer(reducer, {
    loading: false,
    data: [],
  });

  useEffect(() => {
    dispatchDataProducts({
      type: 'LOADING',
      payload: {
        loading: true,
      },
    });

    api
      .get('/products')
      .then((response) => {
        const { data } = response;

        dispatchDataProducts({
          type: 'FETCH',
          payload: {
            data,
          },
        });

        dispatchDataProducts({
          type: 'LOADING',
          payload: {
            loading: false,
          },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return {
    dataProducts,
  };
};
