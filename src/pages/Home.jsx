import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'

const Home = () => {
  return (
    <>
      <Main/>
      <Row title='Upcoming' fetchURL={request.requestUpcoming}/>
      <Row title='Popular' fetchURL={request.requestPopular}/>
      <Row title='Top Rated' fetchURL={request.requestTopRated}/>
      <Row title='Horror' fetchURL={request.requestHorror}/>
      <Row title='Trending' fetchURL={request.requestTrending}/>
    </>
    
  )
}

export default Home