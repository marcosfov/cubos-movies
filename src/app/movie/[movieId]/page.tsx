import MovieDetailsCard from './components/MovieDetailsCard'
import * as S from './styles'

interface MovieDetailsPage {
  params: {
    movieId: string
  }
}

const MovieDetailsPage = async ({ params }: MovieDetailsPage) => {
  return (
    <S.Wrapper>
      {params.movieId && <MovieDetailsCard movieId={params.movieId} />}
      {!params.movieId && <p>Filme não encontrado!</p>}
    </S.Wrapper>
  )
}

export default MovieDetailsPage
