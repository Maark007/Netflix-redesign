import { useQuery } from 'react-query'
import api from '../services/api'

type useFetchMoviesTypes = {
  movieId: string
}

async function fetchMovies(movieID: string) {
  const similarMovies = await api.get(`/movie/${movieID}/similar`)
  const movieVideos = await api.get(`/movie/${movieID}/videos`)
  const generalMovieData = await api.get(`/movie/${movieID}`)

  return { 
    data: generalMovieData?.data, 
    similar: similarMovies?.data,
    videos: movieVideos?.data,
  }
}

export function useFetchMovies(props: useFetchMoviesTypes) {
  const { movieId } = props

  const { data, ...restQuery } = useQuery(['useFetchMovies', movieId], () => fetchMovies(movieId))

  return { ...data, ...restQuery }
}