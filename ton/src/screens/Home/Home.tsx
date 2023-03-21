import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';

import { Header, ProductCard } from '../../components';

import { Content } from './styles';

export const Home = () => {
  const [data, setData] = useState([
    {
      id: 'T1',
      title: 'T1 Brother',
      thumbnail:
        'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t1-1',
      price: 118.8,
    },
    {
      id: 'T1_CHIP',
      title: 'T1 Chip Brother',
      thumbnail:
        'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t1-chip-1',
      price: 190.8,
    },
    {
      id: 'T2',
      title: 'T2+ Brother',
      thumbnail:
        'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t2-1',
      price: 310.8,
    },
    {
      id: 'T3',
      title: 'T3 Brother',
      thumbnail:
        'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_auto/site-ton/t3-1',
      price: 418.8,
    },
  ]);

  return (
    <>
      <Header />

      <Content>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => <ProductCard {...item} />}
          keyExtractor={(item) => item.id}
        />
      </Content>
    </>
  );
};
