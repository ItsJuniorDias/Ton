import React from 'react';
import { Pressable, Title } from './styles';

type ButtonProps = {
  testID?: string;
  title: string;
  onPress: () => void;
  isDelete?: boolean;
};

export const Button = ({
  testID = 'button_testID',
  title,
  onPress,
  isDelete,
}: ButtonProps) => {
  return (
    <Pressable
      testID={testID}
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
