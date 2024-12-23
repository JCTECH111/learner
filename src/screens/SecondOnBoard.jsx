import React from 'react'
import OnBoard from '../components/OnBoard'
import humanImage from "../assets/human2.png"
function SecondOnBoard() {
  return (
    <OnBoard img={humanImage} borderStage="right" navigation="/thirdboard" h1text="Easy learning, whereever & wherever"  h1span="you want" ptag="Stay connected! Customize your preferences and explore the features that matter most to you for a personalized experience."/>
  )
}

export default SecondOnBoard
