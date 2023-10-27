import axios from 'axios'
import { useEffect, useState } from 'react'

import { Movie } from '@/types/moviesTypes'

interface MovieDetailsPage {
  params: {
    movieId: string
  }
}

const MovieDetailsPage = async ({ params }: MovieDetailsPage) => {
  const [movie, setMovie] = useState<Movie | null>(null)

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
      setMovie(response.data.results[0])
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    getPopularMovies()
  }, [])

  return <h1>{params.movieId}</h1>
}

export default MovieDetailsPage
