import styled, { css } from 'styled-components';
import Link from 'next/link';
export const Wrapper = styled.section`
  ${() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  `}
`;
export const CourseContent = styled.div<{ show: boolean }>`
  ${({ theme, show }) => css`
  max-height:${show ? '100%' : '0'};
  transition: max-height 3s ease-in-out;
  display: ${show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #3B3B3B ;
  width: 350px;
  color:white;
  border-radius: 5px;
  padding:10px;
  text-align: justify;
  margin-top: -14px;
  @media ${theme.media.lteMedium} {
    width: 80%;
  }
`}
`;
export const KnowMore = styled(Link)`
  ${() => css`
  padding: 10px;
  width: 100%;
  background-color: #FFB606;
  color: white;
  border-radius: 5px ;
  margin-top: 20px;
  display: flex;
  align-items:center;
  &:hover{
    cursor: pointer;
  }
`}
`;
