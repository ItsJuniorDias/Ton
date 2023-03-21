import styled from 'styled-components/native';
import { scale } from '../../utils';

export const Content = styled.View`
  flex: 1;
  padding: 0px 24px;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${scale(18)};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
