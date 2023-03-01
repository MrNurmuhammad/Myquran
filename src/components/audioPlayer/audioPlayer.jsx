import React, { useContext, useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { audioContext } from '../../context/context'
import Navbar from '../navbar/navbar'


export  const AudioPlayer = () => {
  const {audioId, setAudioId} = useContext(audioContext)
  const { audioData, setAudioData } = useContext(audioContext);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  useEffect(() => {

  }, [])
    
  return (
      <div>
        
        <ReactAudioPlayer
        src={audioData[audioId]?.audio}
        autoPlay={false}
        controls
        onPlay={togglePlay}
        onPause={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />
      <h2>{isPlaying ? "Playing" : "Paused"}</h2>
    </div>
  )
}
