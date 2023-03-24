import styled from 'styled-components/native';
import { scale } from '../../utils';

export const Content = styled.View`
  flex: 1;
  padding: 0px 24px;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.background};
`;
