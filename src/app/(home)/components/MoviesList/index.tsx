'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

import * as S from './styles'
import MovieCard from '../MovieCard'
import { Movie } from '@/types/moviesTypes'

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY

  async function getPopularMovies() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`,
        {
          params: {
            api_key
          }
        }
      )

      setMovies(response.data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    getPopularMovies()
  }, [])

  return (
    <S.Wrapper>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </S.Wrapper>
  )
}

export default MoviesList
