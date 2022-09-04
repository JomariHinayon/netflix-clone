import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'

const Home = () => {
  return (
    <>
      <Main/>
      <Row rowId='1' title='UpComing' fetchURL={request.requestUpcoming}/>
      <Row rowId='2' title='Popular' fetchURL={request.requestPopular}/>
      <Row rowId='3' title='Top Rated' fetchURL={request.requestTopRated}/>
      <Row rowId='4' title='Horror' fetchURL={request.requestHorror}/>
      <Row rowId='5' title='Trending' fetchURL={request.requestTrending}/>
    </>
    
  )
}

export default Home