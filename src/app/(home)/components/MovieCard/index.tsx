import Image from 'next/image'
import Link from 'next/link'

import { Movie } from '@/types/moviesTypes'
import * as S from './styles'

interface MovieCardProps {
  movie: Movie | null
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = process.env.NEXT_PUBLIC_TMDB_IMG
  const maxCharacters = 400

  return (
    <>
      {movie && (
        <S.Wrapper>
          <Link href={`/movie/${movie.id}`}>
            <S.ImageContainer>
              <Image
                src={imageUrl + movie.poster_path}
                alt={movie.title}
                width={0}
                height={0}
                sizes="100vw"
              />
            </S.ImageContainer>
          </Link>

          <S.InfosContainer>
            <S.InfoTitle>
              <S.Title>{movie.title}</S.Title>
            </S.InfoTitle>

            <S.InfoContent>
              <S.Date>{movie.release_date}</S.Date>

              <S.Description>
                {!movie.overview && 'O filme não possui descrição.'}
                {movie.overview && movie.overview.length > maxCharacters
                  ? movie.overview.slice(0, maxCharacters) + '...'
                  : movie.overview}
              </S.Description>

              <S.GenreContainer>
                {movie.genre_ids.map((genre) => (
                  <S.GenreTitle key={genre}>{genre}</S.GenreTitle>
                ))}
              </S.GenreContainer>
            </S.InfoContent>
          </S.InfosContainer>
        </S.Wrapper>
      )}
    </>
  )
}

export default MovieCard
