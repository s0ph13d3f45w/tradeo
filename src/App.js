import React, {Suspense, useState} from 'react'
import Feed from './components/Feed'
import NavBar from './components/AppBar'

import { useTransition, animated } from 'react-spring'




export default function(){

// const useMount = () =>{
//   const [show, setShow ] = useState(false)
//   const transitions = useTransition(show, null, {
//     from: { position: 'absolute', opacity: 0},
//     enter: { opacity: 1 },
//     leave: { opacity: 0}
//   })
//   return  transitions.map(({ item, key, props }) =>
//     item && <animated.div key={key} style={props}>✌️</animated.div>)
// }
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