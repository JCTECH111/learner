import React from 'react'
import OnBoard from '../components/OnBoard'
import humanImage from "../assets/human3.png"
function ThirdOnBoard() {
  return (
    <OnBoard img={humanImage} borderStage="full" navigation="/signup" h1text="Start your path to mastery with"  h1span="teacher" ptag="You're all set! Start exploring and enjoy the full range of features we have to offer. We’re here to help every step of the way."/>
  )
}

export default ThirdOnBoard
