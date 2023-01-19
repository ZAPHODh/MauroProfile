import { Title } from 'components/Heading/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  >${Title}{
    color:#FFB606;
  }
  `}
`;

export const ProfilePic = styled.img<{ imgWidth: string }>`
  ${({ imgWidth }) => css`
    height: ${imgWidth};
    width: ${imgWidth};
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 20px;
    border: 2px solid #FFB606;
 `}
`;
