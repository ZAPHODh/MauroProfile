import styled, { css } from 'styled-components';

export const Wrapper = styled.table`
  ${({ theme }) => css`
  border-collapse: collapse;
  width: 350px ;
  border-radius: 5px;
  overflow: hidden;
  @media ${theme.media.lteMedium} {
      width: 80%;
  }

  `}
`;
export const Th = styled.th`
  font-size: 13px;
  text-align: left;
  padding: 8px;
  background-color: #FFB606;
  color: #1C1C1C;
`;
