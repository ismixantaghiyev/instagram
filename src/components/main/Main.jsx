import React from 'react'
import StorySlider from './StorySlider'
import "./Main.css"
import Post from '../Post/Post'

function Main() {
  return (
    <div className='main'>
      <StorySlider/>
      <Post/>
    </div>
  )
}

export default Main
