'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: auto;
    height: 30px;
    border-radius: 30px;
    border: 1px solid ${theme.colors.primary};
    padding: 3px 10px;
    background-color: #fff;
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.colors.primary};
  `}
`
