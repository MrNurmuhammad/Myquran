import React from 'react'
import Navbar from '../navbar/navbar'
import { useContext } from 'react'
import { audioContext } from '../../context/context'
import { AudioPlayer } from '../audioPlayer/audioPlayer'

function Layout({children}) {

    let {audioData} = useContext(audioContext)

  return (
    <div>
        <Navbar />
        {
            audioData.length != 0 ? <AudioPlayer /> : null
        }
        {children}
    </div>
  )
}

export default Layout