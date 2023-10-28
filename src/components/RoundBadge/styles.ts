'use client'

import styled, { css } from 'styled-components'

interface Props {
  size: 'sm' | 'md' | 'lg'
}

const SizeModifiers = {
  sm: 50,
  md: 80,
  lg: 100
}

export const External = styled.div<Props>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${SizeModifiers[size]}px;
    height: ${SizeModifiers[size]}px;
    border-radius: 50%;
    border: 3px solid ${theme.colors.primary};
    background-color: ${theme.colors.pool};
  `}
`

export const Internal = styled(External)`
  ${({ theme, size }) => css`
    width: ${SizeModifiers[size] * 0.8}px;
    height: ${SizeModifiers[size] * 0.8}px;
    background-color: ${theme.colors.primary};
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.pool};
    text-align: center;
  `}
`
