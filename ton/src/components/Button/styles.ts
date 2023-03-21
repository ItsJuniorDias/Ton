import styled from 'styled-components/native';
import { scale } from '../../utils';

export const Pressable = styled.Pressable`
  width: 100%;
  height: ${scale(26)};
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  border-radius: ${scale(16)};
  margin-top: ${scale(16)};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${scale(14)};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
