import React from 'react'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'
import { useAppContext } from '../context/AppContext'

const Movies = () => {

  const {shows}= useAppContext()

  return shows.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:ppx-40 xl:px-44 overflow-hidden min-h-[80vh]'>

      <BlurCircle top='150px' left='0px'/>
      <BlurCircle bottom='50px' right='50px'/>
      <h1 className='text-3xl font-medium my-4'>Now Showing</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {shows.map((movie)=>(
          <MovieCard movie={movie} key={movie._id}/>
          ))}
      </div>
    </div>
  ): (
    <div className=' flex flex-col items-center justify-center h-screen'>
      <h1 className='textt-3x1 font-bold text-center'>No movie available</h1>
    </div>
  )
}

export default Movies