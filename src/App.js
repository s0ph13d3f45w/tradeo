import React, {Suspense} from 'react'
import UserCard from './components/UserCard'
import NavBar from './components/AppBar'

export default function(){
  return(
    <>
      <Suspense fallback={null}>
        <NavBar />
        <br />
        <br />
        <UserCard />
      </Suspense>
    </>
  )
}