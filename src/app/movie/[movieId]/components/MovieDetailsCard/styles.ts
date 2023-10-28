'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
`

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e6e6e6;
    padding-inline: 2rem 1rem;
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.secondary};
  `}
`

export const Date = styled.span`
  color: #999696;
  font-size: 1.25rem;
`

export const DetailsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
  `}
`

export const DetailsContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1.5rem 1rem 1rem 2rem;
    background-color: #f2f2f2;
    justify-content: space-between;
  `}
`
export const HighlightedText = styled.span`
  ${({ theme }) => css`
    font-size: 1.5rem;
    color: ${theme.colors.primary};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: #6c6c6c;
    font-weight: 600;
  `}
`
export const InfosContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
  `}
`
export const InfosContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export const InfoTitle = styled.span`
  ${({ theme }) => css`
    font-size: 1.25rem;
    color: ${theme.colors.primary};
  `}
`
export const InfoText = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    color: #6c6c6c;
    font-weight: 600;
  `}
`

export const GenreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const GenreContent = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`

export const Separator = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.pool};
    margin-top: 0.25rem;
    margin-bottom: 1rem;
  `}
`

export const ImageContainer = styled.div`
  width: auto;

  img {
    width: 300px;
    height: 100%;
    object-fit: cover;
  }
`

export const IframeContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
`
