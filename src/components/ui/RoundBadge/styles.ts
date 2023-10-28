'use client'

import styled, { css } from 'styled-components'

interface Props {
  size: 'sm' | 'md' | 'lg'
}

const SizeModifiers = {
  sm: {
    width: 50,
    font: '1rem'
  },
  md: {
    width: 70,
    font: '1.5rem'
  },
  lg: {
    width: 100,
    font: '2rem'
  }
}

export const External = styled.div<Props>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${SizeModifiers[size].width}px;
    height: ${SizeModifiers[size].width}px;
    border-radius: 50%;
    border: 3px solid ${theme.colors.primary};
    background-color: ${theme.colors.pool};
  `}
`

export const Internal = styled(External)`
  ${({ theme, size }) => css`
    width: ${SizeModifiers[size].width * 0.8}px;
    height: ${SizeModifiers[size].width * 0.8}px;
    background-color: ${theme.colors.primary};
  `}
`

export const Text = styled.span<Props>`
  ${({ theme, size }) => css`
    font-size: ${SizeModifiers[size].font};
    color: ${theme.colors.pool};
    text-align: center;
  `}
`
