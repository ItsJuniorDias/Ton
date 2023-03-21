import React from 'react';
import { View } from 'react-native';

import { Pressable, Title } from './styles';

export const Button = ({ title }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1,
        },
      ]}
    >
      <Title>{title}</Title>
    </Pressable>
  );
};
