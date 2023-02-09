import { Title } from 'components/Heading/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${() => css`
  color:#FFB606;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  >${Title}{
    color:#FFB606;
    margin: 5px;
  }
  `}
`;

export const ProfilePic = styled.div<{ imgWidth: number }>`
  ${({ imgWidth }) => css`
    height: ${imgWidth} px;
    width: ${imgWidth} px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 20px;
    border: 2px solid #FFB606;
    overflow: hidden;
 `}
`;
