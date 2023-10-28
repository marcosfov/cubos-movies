'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

import { MovieDetails } from '@/types/moviesTypes'
import * as S from './styles'
import Image from 'next/image'
import OvalShape from '@/components/OvalShape'
import RoundBadge from '@/components/RoundBadge'

interface MovieDetailsCardProps {
  movieId: string
}

const MovieDetailsCard = ({ movieId }: MovieDetailsCardProps) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null)
  // const [movieVideo, setMovieVideo] = useState('')
  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const imageUrl = process.env.NEXT_PUBLIC_TMDB_IMG

  function returnDefaultText(text: any) {
    return text ? text : 'N/A'
  }

  function returnPercentageText(number: number) {
    const rouded = Math.round(number * 10)
    const stringPercentage = `${rouded}%`
    return stringPercentage
  }

  async function getMovieDetails() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&append_to_response=videos`,
        {
          params: {
            api_key
          }
        }
      )

      setMovie(response.data)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  console.log('movie', movie)

  return (
    <>
      {movie && (
        <S.Wrapper>
          <S.TitleContainer>
            <S.Title>{returnDefaultText(movie.title)}</S.Title>
            <S.Date>{returnDefaultText(movie.release_date)}</S.Date>
          </S.TitleContainer>

          <S.DetailsContainer>
            <S.DetailsContent>
              <section>
                <S.HighlightedText>Sinopse</S.HighlightedText>
                <S.Separator></S.Separator>
                <S.Description>
                  {returnDefaultText(movie.overview)}
                </S.Description>
              </section>

              <section>
                <S.HighlightedText>Informações</S.HighlightedText>
                <S.Separator></S.Separator>

                <S.InfosContainer>
                  <S.InfosContent>
                    <S.InfoTitle>Situação</S.InfoTitle>
                    <S.InfoText>{returnDefaultText(movie.status)}</S.InfoText>
                  </S.InfosContent>

                  <S.InfosContent>
                    <S.InfoTitle>idioma</S.InfoTitle>
                    <S.InfoText>
                      {returnDefaultText(movie.original_language)}
                    </S.InfoText>
                  </S.InfosContent>

                  <S.InfosContent>
                    <S.InfoTitle>Duração</S.InfoTitle>
                    <S.InfoText>{returnDefaultText(movie.runtime)}</S.InfoText>
                  </S.InfosContent>

                  <S.InfosContent>
                    <S.InfoTitle>Orçamento</S.InfoTitle>
                    <S.InfoText>${movie.budget}</S.InfoText>
                  </S.InfosContent>

                  <S.InfosContent>
                    <S.InfoTitle>Receita</S.InfoTitle>
                    <S.InfoText>${movie.revenue}</S.InfoText>
                  </S.InfosContent>

                  <S.InfosContent>
                    <S.InfoTitle>Lucro</S.InfoTitle>
                    <S.InfoText>${movie.revenue - movie.budget}</S.InfoText>
                  </S.InfosContent>
                </S.InfosContainer>
              </section>

              <section>
                <S.GenreContainer>
                  <S.GenreContent>
                    {movie.genres.map((genre) => (
                      <OvalShape key={genre.id} text={genre.name} />
                    ))}
                  </S.GenreContent>

                  <div>
                    <RoundBadge
                      text={returnPercentageText(movie.vote_average)}
                      size="lg"
                    />
                  </div>
                </S.GenreContainer>
              </section>
            </S.DetailsContent>

            {movie.poster_path && (
              <S.ImageContainer>
                <Image
                  src={imageUrl + movie.poster_path}
                  alt={movie.title}
                  sizes="100vw"
                  width={300}
                  height={500}
                />
              </S.ImageContainer>
            )}
          </S.DetailsContainer>

          {movie.videos.results.length > 0 && (
            <S.IframeContainer>
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                frameBorder="0"
                allowFullScreen
                title="Vídeo do YouTube"
              ></iframe>
            </S.IframeContainer>
          )}
        </S.Wrapper>
      )}
    </>
  )
}

export default MovieDetailsCard