import styled from 'styled-components/native';
import { scale } from '../../utils';

export const Container = styled.View`
  width: 46%;
  height: ${scale(228)};
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: ${scale(24)};
  margin-right: ${scale(24)};
  border-radius: ${scale(16)};
  padding: ${scale(16)};
`;

export const Thumbnail = styled.Image`
  height: ${scale(75)};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${scale(16)};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: ${scale(16)};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${scale(12)};
  color: ${({ theme }) => theme.colors.title};
  line-height: ${scale(24)};
`;

export const Installment = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Installments = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${scale(11)};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const PriceDivided = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${scale(18)};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
