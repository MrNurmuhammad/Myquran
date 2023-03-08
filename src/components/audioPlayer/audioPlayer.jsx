import React, { useContext, useEffect, useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { audioContext } from '../../context/context'
import Navbar from '../navbar/navbar'
import sass from './audioPlayer.module.scss'


export  const AudioPlayer = () => {
  const {audioId, setAudioId} = useContext(audioContext)
  const { audioData, setAudioData } = useContext(audioContext);
  const {surah, setSurah} = useContext(audioContext);
  const audioRef = useRef(null);

  useEffect(() => {

  }, [])
    
  return (
      <div className={sass.audioPlayer}>
        <h2><span>{surah?.data?.number}</span> - {surah?.data?.englishName}</h2>
        <audio  
          src={audioData[audioId]?.audio}
          autoPlay
          controls
          onEnded={() => setAudioId(audioId + 1)}
          
        >
        </audio>
    </div>
  )
}
