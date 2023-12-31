import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'


function MainContainer() {
  return (
    <div className='grid grid-flow-col'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer