'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    input {
      width: 100%;
      height: 40px;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      background-color: #ebebeb;
      border: none;
      opacity: 0.75;

      &:focus,
      :focus-visible {
        border: 2px solid ${theme.colors.secondary};
        outline: none;
      }

      &::placeholder {
        color: ${theme.colors.primary};
      }
    }
  `}
`
