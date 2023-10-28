'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
    overflow-y: hidden;

    @media ${theme.device.tablet} {
      height: 225px;
    }

    @media ${theme.device.mobile} {
      height: 180px;
    }
  `}
`

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    img {
      width: 200px;
      height: auto;
      object-fit: contain;

      @media ${theme.device.tablet} {
        width: 150px;
      }

      @media ${theme.device.mobile} {
        width: 120px;
      }
    }
  `}
`

export const InfosContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const AbsoluteRound = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 25px;
    left: 5px;

    @media ${theme.device.tablet} {
      top: 20px;
    }

    @media ${theme.device.mobile} {
      top: 10px;
    }
  `}
`

export const InfoTitle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.primary};
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: 2rem;
    line-height: 26px;
    color: ${theme.colors.secondary};
    margin-left: 5.5rem;

    @media ${theme.device.tablet} {
      line-height: 20px;
      font-size: 1.5rem;
    }

    @media ${theme.device.mobile} {
      font-size: 1rem;
      margin-left: 4rem;
      line-height: 15px;
    }
  `}
`

export const InfoContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${theme.colors.gray};
    height: 80%;
    padding: 0 1.5rem 1.5rem;

    @media ${theme.device.tablet} {
      padding: 0 1rem 1rem;
    }

    @media ${theme.device.mobile} {
      padding: 0 0.5rem 0.5rem;
    }
  `}
`

export const Date = styled.span`
  ${({ theme }) => css`
    color: #999696;
    font-size: 1.25rem;
    margin-left: 4rem;

    @media ${theme.device.tablet} {
      font-size: 1rem;
    }

    @media ${theme.device.mobile} {
      margin-left: 3rem;
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: #6c6c6c;
    line-height: 16px;

    @media ${theme.device.tablet} {
      font-size: 0.875rem;
    }

    @media ${theme.device.mobile} {
      font-size: 0.7rem;
    }
  `}
`

export const GenreContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    @media ${theme.device.mobile} {
      gap: 0.3rem;
    }
  `}
`
