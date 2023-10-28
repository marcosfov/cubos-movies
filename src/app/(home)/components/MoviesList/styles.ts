'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    @media ${theme.device.tablet} {
      max-width: 550px;
    }

    @media ${theme.device.mobile} {
      width: 370px;
    }
  `}
`

export const SeachContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 0.5rem;
  }
`
