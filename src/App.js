import React, {Suspense} from 'react'
import Feed from './components/Feed'
import NavBar from './components/AppBar'

export default function(){
  return(
    <>
      <Suspense fallback={null}>
        <NavBar />
        <br />
        <br />
        <br />
        <Feed />
      </Suspense>
    </>
  )
}