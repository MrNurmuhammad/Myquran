import React, { useContext, useEffect } from 'react'
import { audioContext } from '../../context/context'
import Navbar from '../navbar/navbar'


export  const AudioPlayer = () => {
  const {audioId, setAudioId} = useContext(audioContext)
  const { audioData, setAudioData } = useContext(audioContext);

  useEffect(() => {

  }, [])
    
  return (
      <div>
        <audio style={{width: "100%"}}
          src={audioData[audioId]?.audio}
          controls
          onEnded={() => setAudioId(audioId + 1)}
        >
        </audio>
    </div>
  )
}
