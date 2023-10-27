import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 800px;
  height: 300px;
`

export const ImageContainer = styled.div`
  img {
    width: 200px;
    height: auto;
    object-fit: contain;
  }
`

export const InfosContainer = styled.div`
  width: 100%;
  height: 100%;
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
    color: ${theme.colors.secondary};
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
  `}
`

export const Date = styled.span`
  color: #999696;
  font-size: 1.25rem;
`

export const Description = styled.p`
  font-size: 1rem;
  color: #6c6c6c;
`

export const GenreContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`

export const GenreTitle = styled.div``
