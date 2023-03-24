import styled from 'styled-components/native';
import { scale } from '../../utils';

type DeleteProps = {
  isDelete: boolean | undefined;
};

export const Pressable = styled.Pressable<DeleteProps>`
  width: 100%;
  height: ${scale(26)};
  background-color: ${({ theme, isDelete }) =>
    isDelete ? theme.colors.alert : theme.colors.secondary};
  justify-content: center;
  border-radius: ${scale(16)};
  margin-top: ${scale(16)};
`;

export const Title = styled.Text<DeleteProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${scale(14)};
  color: ${({ theme, isDelete }) =>
    isDelete ? theme.colors.shape : theme.colors.text};
  text-align: center;
`;
