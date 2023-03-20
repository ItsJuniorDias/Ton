import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(64)}px;
  padding: 0px ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const FakeView = styled.View`
  width: ${RFValue(26)}px;
  height: ${RFValue(26)}px;
`;

export const Notification = styled.View`
  width: ${RFValue(18)}px;
  height: ${RFValue(18)}px;
  background-color: ${({ theme }) => theme.colors.notification};
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;

  position: absolute;
  margin-left: 16px;
  margin-top: -8px;
`;

export const NotificationValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;
