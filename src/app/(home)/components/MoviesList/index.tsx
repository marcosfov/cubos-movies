'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import axios from 'axios'

import * as S from './styles'
import MovieCard from '../MovieCard'
import { Movie } from '@/types/moviesTypes'
import SearchInput from '@/components/SearchInput'
import { GENRES } from '@/utils/movieGenres'
import { Loading } from '@/components/ui/Loading'
import RoundBadge from '@/components/ui/RoundBadge'

const MoviesList = () => {
  const itemsPerPage = 5
  const [movies, setMovies] = useState<Movie[]>([])
  const [filterByGenre, setFilterByGenre] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [pageQuantity, setPageQuantity] = useState(0)
  const [buttons, setButtons] = useState<{ button: number }[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationPage, setPaginationPage] = useState(1)
  const htmlRef = useRef(document.documentElement)

  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY

  const handleFilterChange = () => {
    setPaginationPage(1)
    const updatedFilterByGenre = !filterByGenre

    updatedFilterByGenre
      ? getMoviesByGenre(searchTerm, currentPage)
      : getMoviesByQuery(searchTerm, currentPage)

    setFilterByGenre(updatedFilterByGenre)
  }

  const handleSeachInput = async (searchTerm: string) => {
    setSearchTerm(searchTerm.toLocaleLowerCase())

    if (!searchTerm) return setMovies([])

    searchTerm && filterByGenre
      ? await getMoviesByGenre(searchTerm, currentPage)
      : await getMoviesByQuery(searchTerm, currentPage)
  }

  async function getPopularMovies(page: number) {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`,
        {
          params: {
            api_key
          }
        }
      )

      if (page == 1) {
        setMovies(response.data.results)
        setPageQuantity(response.data.results.length / itemsPerPage)
      } else if (page > 1) {
        setMovies((prevMovies) => [...prevMovies, ...response.data.results])
        setPageQuantity(
          pageQuantity + response.data.results.length / itemsPerPage
        )
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  const getMoviesByQuery = async (searchTerm: string, page: number) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?language=pt-BR&query=${searchTerm}&page=${page}&include_adult=false&with_genres=${searchTerm}`,
        {
          params: {
            api_key
          }
        }
      )

      if (page == 1) {
        setMovies(response.data.results)
        setPageQuantity(response.data.results.length / itemsPerPage)
      } else if (page > 1) {
        setMovies((prevMovies) => [...prevMovies, ...response.data.results])
        setPageQuantity(
          pageQuantity + response.data.results.length / itemsPerPage
        )
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  const getMoviesByGenre = async (searchTerm: string, page: number) => {
    const selectGenre = GENRES.find((genre) => genre.name.includes(searchTerm))

    if (!selectGenre) return setMovies([])
    setLoading(true)
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc&with_genres=${selectGenre.id}`,
        {
          params: {
            api_key
          }
        }
      )

      if (page == 1) {
        setMovies(response.data.results)
        setPageQuantity(response.data.results.length / itemsPerPage)
      } else if (page > 1) {
        setMovies((prevMovies) => [...prevMovies, ...response.data.results])
        setPageQuantity(
          pageQuantity + response.data.results.length / itemsPerPage
        )
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleNumberPage = (page: number) => {
    setPaginationPage(page)
    scrollToTop()
  }

  const getVisibleMovies = () => {
    const startIndex = (paginationPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return movies.slice(startIndex, endIndex)
  }

  const getButtons = () => {
    const buttonsArray = []
    for (let index = 1; index <= pageQuantity; index++) {
      buttonsArray.push({ button: index })
    }
    setButtons(buttonsArray)
  }

  const loadNextPage = () => {
    const nextCurrentPage = currentPage + 1
    setCurrentPage(nextCurrentPage)
    setPaginationPage(paginationPage + 1)
    getPopularMovies(nextCurrentPage)
    scrollToTop()
  }

  const scrollToTop = () => {
    htmlRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    getPopularMovies(currentPage)
  }, [])

  useEffect(() => {
    getButtons()
  }, [pageQuantity])

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

      {loading && <Loading />}
      {!loading && (
        <>
          {movies.length <= 0 && searchTerm && (
            <p>Ops! Parece que não encontramos nada para "{searchTerm}"</p>
          )}
          {getVisibleMovies().map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}

          {movies.length > 0 && (
            <S.ButtonsContainer>
              {buttons.map((item) => (
                <Fragment key={item.button}>
                  {item.button >= paginationPage - 2 &&
                    item.button <= paginationPage + 2 && (
                      <>
                        {item.button === paginationPage ? (
                          <button>
                            <RoundBadge size="sm" text={String(item.button)} />
                          </button>
                        ) : (
                          <button>
                            <S.ButtonNumber
                              onClick={() => handleNumberPage(item.button)}
                            >
                              {item.button}
                            </S.ButtonNumber>
                          </button>
                        )}
                      </>
                    )}
                </Fragment>
              ))}

              {buttons.length > 0 && paginationPage + 2 > buttons.length && (
                <button>
                  <S.ButtonNumber onClick={loadNextPage}>
                    {buttons.length + 1}
                  </S.ButtonNumber>
                </button>
              )}
            </S.ButtonsContainer>
          )}
        </>
      )}
    </S.Wrapper>
  )
}

export default MoviesList
