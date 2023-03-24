import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { fetch } from '../../store/modules/cart';
import { Header, ProductCard } from '../../components';
import { useAppSelector, useAppDispatch, useFetchProducts } from '../../hooks';
import { theme } from '../../global';

import { Content, LoadingContent } from './styles';

export const Home = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const {
    dataProducts: { data, loading },
  } = useFetchProducts();

  return (
    <>
      <Header title="Home" amountCart={6} />

      {loading && (
        <LoadingContent>
          <ActivityIndicator size="large" color={theme.colors.secondary} />
        </LoadingContent>
      )}

      {!loading && (
        <Content>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({ item }) => <ProductCard {...item} />}
            keyExtractor={(item) => item.id}
          />
        </Content>
      )}
    </>
  );
};
