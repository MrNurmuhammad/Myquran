import React, {useRef} from 'react'
import Navbar from '../navbar/navbar'
import { useContext } from 'react'
import { audioContext } from '../../context/context'
import { AudioPlayer } from '../audioPlayer/audioPlayer'

function Layout({children}) {
  const audioRef = useRef(null);

    let {audioData} = useContext(audioContext)

  return (
    <div>
      {/* <h1>layout</h1> */}
        {
            audioData.length != 0 ? <AudioPlayer  ref={audioRef}/> : null
        }
        {children}
    </div>
  )
}

export default Layout