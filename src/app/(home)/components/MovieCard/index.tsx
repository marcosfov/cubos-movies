'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Movie } from '@/types/moviesTypes'
import * as S from './styles'
import RoundBadge from '@/components/ui/RoundBadge'
import helpers from '@/utils/helpers'
import OvalShape from '@/components/ui/OvalShape'
import { GENRES } from '@/utils/movieGenres'

interface MovieCardProps {
  movie: Movie | null
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = process.env.NEXT_PUBLIC_TMDB_IMG
  const [mediaSize, setMediaSize] = useState<'sm' | 'md' | 'lg'>('lg')
  const maxCharacters = {
    sm: 175,
    md: 350,
    lg: 400
  }

  function getGenres(id: number) {
    const genre = GENRES.find((genre) => genre.id === id)
    return genre ? genre.name : 'Gênero não encontrado'
  }

  useEffect(() => {
    const handleResize = () => {
      const larguraTela = window.innerWidth

      if (larguraTela <= 550) {
        setMediaSize('sm')
      } else if (larguraTela <= 850) {
        setMediaSize('md')
      } else {
        setMediaSize('lg')
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {movie && (
        <Link href={`/movie/${movie.id}`} style={{ width: '100%' }}>
          <S.Wrapper>
            {movie.poster_path && imageUrl + movie.poster_path ? (
              <S.ImageContainer>
                <Image
                  src={imageUrl + movie.poster_path}
                  alt={movie.title}
                  sizes="100vw"
                  width={300}
                  height={500}
                />
              </S.ImageContainer>
            ) : (
              <S.ImageContainer>
                <Image
                  src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                  alt="no image"
                  sizes="100vw"
                  width={300}
                  height={500}
                />
              </S.ImageContainer>
            )}

            <S.InfosContainer>
              <S.InfoTitle>
                <S.Title>{movie.title}</S.Title>
              </S.InfoTitle>

              <S.AbsoluteRound>
                <RoundBadge
                  size={mediaSize !== 'lg' ? 'sm' : 'md'}
                  text={helpers.returnPercentageText(movie.vote_average)}
                />
              </S.AbsoluteRound>

              <S.InfoContent>
                <S.Date>
                  {movie.release_date ? movie.release_date : 'N/A'}
                </S.Date>

                <S.Description>
                  {!movie.overview && 'O filme não possui descrição.'}
                  {movie.overview &&
                  movie.overview.length > Number(maxCharacters[mediaSize])
                    ? movie.overview.slice(
                        0,
                        Number(maxCharacters[mediaSize])
                      ) + '...'
                    : movie.overview}
                </S.Description>

                {movie.genre_ids.length > 0 && (
                  <S.GenreContainer>
                    {movie.genre_ids.map((genre, index) => (
                      <OvalShape key={index} text={getGenres(genre)} />
                    ))}
                  </S.GenreContainer>
                )}
              </S.InfoContent>
            </S.InfosContainer>
          </S.Wrapper>
        </Link>
      )}
    </>
  )
}

export default MovieCard
