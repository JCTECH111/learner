import React from 'react'
import OnBoard from '../components/OnBoard'
import humanImage from "../assets/human1.png"
function FirstOnBoard() {
  return (
    <OnBoard img={humanImage} navigation="/secondboard" h1text="Choose the right Online course"  h1span="for growth" ptag="Welcome! Let's get started on your journey with us. We’ll guide you through everything you need to know to make the most of your experience"/>
  )
}

export default FirstOnBoard
