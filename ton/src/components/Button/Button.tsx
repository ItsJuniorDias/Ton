import React, { useRef } from 'react';
import { View } from 'react-native';

import { Pressable, Title } from './styles';

type ButtonProps = {
  title: string;
};

export const Button = ({ title }: ButtonProps) => {
  const testIDs = useRef({
    button: 'button_testID',
  }).current;

  return (
    <Pressable
      testID={testIDs.button}
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
