import styled from 'styled-components';
import { em } from 'polished';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: stretch;
  padding: ${({ theme }) => em(theme.honeycomb.size.increased)};
`;