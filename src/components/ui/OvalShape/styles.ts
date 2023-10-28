'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: auto;
    height: 30px;
    border-radius: 30px;
    border: 1px solid ${theme.colors.primary};
    padding: 3px 10px;
    background-color: #fff;

    @media ${theme.device.mobile} {
      padding: 2px 6px;
      height: 20px;
    }
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.colors.primary};
    text-transform: capitalize;
    text-align: center;
    text-wrap: nowrap;

    @media ${theme.device.tablet} {
      font-size: 0.875rem;
    }

    @media ${theme.device.mobile} {
      font-size: 0.7rem;
    }
  `}
`
