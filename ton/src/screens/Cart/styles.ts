import styled from 'styled-components/native';
import { scale } from '../../utils';

export const Content = styled.View`
  flex: 1;
  padding: 0px 24px;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CartProduct = styled.View`
  width: 100%;
  height: ${scale(96)};
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: ${scale(32)};
  border-radius: ${scale(16)};
  padding: ${scale(16)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentImage = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Thumbnail = styled.Image`
  height: ${scale(64)};
  width: ${scale(64)};
`;

export const TitleProduct = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${scale(16)};
  color: ${({ theme }) => theme.colors.text};
`;
