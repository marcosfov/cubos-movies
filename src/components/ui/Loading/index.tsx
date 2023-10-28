import styled, { css } from 'styled-components'

export const Loading = styled.div`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background:
      radial-gradient(farthest-side, #116193 94%, #0000) top/8px 8px no-repeat,
      conic-gradient(#0000 30%, #116193);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    animation: s3 1s infinite linear;

    @keyframes s3 {
      100% {
        transform: rotate(1turn);
      }
    }
  `}
`
