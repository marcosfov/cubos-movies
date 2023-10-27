'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5rem;
    background-color: ${theme.colors.primary};
    margin-bottom: 3rem;
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.secondary};
  `}
`
