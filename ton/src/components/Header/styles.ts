import styled from 'styled-components/native';
import { scale } from '../../utils';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  height: ${scale(64)};
  padding: 0px ${scale(24)};
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${scale(18)};
  color: ${({ theme }) => theme.colors.title};
`;

export const FakeView = styled.View`
  width: ${scale(26)};
  height: ${scale(26)};
`;

export const Notification = styled.View`
  width: ${scale(18)};
  height: ${scale(18)};
  background-color: ${({ theme }) => theme.colors.notification};
  border-radius: ${scale(10)};
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: ${scale(16)};
  margin-top: ${scale(-8)};
`;

export const NotificationValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${scale(14)};
  color: ${({ theme }) => theme.colors.title};
`;
