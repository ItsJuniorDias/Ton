import React, { useRef } from 'react';
import { View } from 'react-native';

import { Pressable, Title } from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  isDelete?: boolean;
};

export const Button = ({ title, onPress, isDelete }: ButtonProps) => {
  const testIDs = useRef({
    button: 'button_testID',
  }).current;

  return (
    <Pressable
      testID={testIDs.button}
      onPress={onPress}
      isDelete={isDelete}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1,
        },
      ]}
    >
      <Title isDelete={isDelete}>{title}</Title>
    </Pressable>
  );
};
