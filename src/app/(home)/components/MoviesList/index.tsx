'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

import * as S from './styles'
import MovieCard from '../MovieCard'
import { Movie } from '@/types/moviesTypes'
import SearchInput from '@/components/SearchInput'
import { GENRES } from '@/utils/movieGenres'

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [filterByGenre, setFilterByGenre] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY

  const handleFilterChange = () => {
    const updatedFilterByGenre = !filterByGenre

    updatedFilterByGenre
      ? getMoviesByGenre(searchTerm)
      : getMoviesByQuery(searchTerm)

    setFilterByGenre(updatedFilterByGenre)
  }

  const handleSeachInput = (searchTerm: string) => {
    setSearchTerm(searchTerm.toLocaleLowerCase())

    if (!searchTerm) getPopularMovies()

    searchTerm && filterByGenre
      ? getMoviesByGenre(searchTerm)
      : getMoviesByQuery(searchTerm)
  }

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

  const getMoviesByQuery = async (searchTerm: string) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?language=pt-BR&query=${searchTerm}&page=1&include_adult=false&with_genres=${searchTerm}`,
        {
          params: {
            api_key
          }
        }
      )

      setMovies(response.data.results)
      console.log('moviesQuery', movies)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  const getMoviesByGenre = async (searchTerm: string) => {
    const selectGenre = GENRES.find((genre) => genre.name.includes(searchTerm))

    if (!selectGenre) return
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=${selectGenre.id}`,
        {
          params: {
            api_key
          }
        }
      )

      setMovies(response.data.results)
      console.log('moviesgenre', movies)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    getPopularMovies()
  }, [])

  return (
    <S.Wrapper>
      <S.SeachContent>
        <SearchInput
          onSearch={handleSeachInput}
          placeholder="Busque um filme por nome ou gênero"
        />

        <S.Checkbox>
          <input
            type="checkbox"
            checked={filterByGenre}
            onChange={handleFilterChange}
          />
          Filtrar por Gênero
        </S.Checkbox>
      </S.SeachContent>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </S.Wrapper>
  )
}

export default MoviesList
