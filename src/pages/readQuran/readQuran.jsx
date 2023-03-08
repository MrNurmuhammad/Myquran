import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { audioContext } from "../../context/context";
import { instanse, instanseImage } from "../../utils/instanse";
import sass from "./readQuran.module.scss";
import { Button } from 'primereact/button';
import Navbar from '../../components/navbar/navbar'
import ReactAudioPlayer from 'react-audio-player';
import { ScrollTop } from 'primereact/scrolltop';
import Loader from "../../components/loader/loader";
import { FaPlay, FaPause } from 'react-icons/fa';



const ReadQuran = () => {
  const { number, oyah } = useParams();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const { audioId, setAudioId } = useContext(audioContext);
  const { audioData, setAudioData } = useContext(audioContext);
  const {surah, setSurah} = useContext(audioContext);
  const [audio, setAudio] = useState()
  const [audioImg, setAudioImg] = useState()
  const [isplaying, setIsplaying] = useState(false);
  const {language, setLanguage} = useContext(audioContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);


  useEffect(() => {

        if(language === "English"){
          instanse.get(`surah/${number}/en.asad`)
          .then((res) => setSurah(res?.data))
          .catch((err) => console.log(err));
          console.log(surah, "eng");
          
        }else if(language === "Russia"){
          instanse.get(`surah/${number}/ru.kuliev`)
          .then((res) => setSurah(res?.data))
          .catch((err) => console.log(err));
          console.log(surah, "ru");
        }else{

          instanse
            .get(`surah/${number}/uz.sodik`)
            .then((res) => setSurah(res?.data))
            .catch((err) => console.log(err));
        }
  }, [language]);
  useEffect(()=> {
    instanse.get(`surah/${number}/ar.alafasy`)
    .then((res) => setAudioData(res?.data?.data?.ayahs))
    .catch((err) => console.log(err));
  },[audioData])

  function Audio(number) {
    setAudioId(number)
    setAudioData(audioData)
    
  }


  return loading ? (
    <Loader />
  ) : (
    <div>
       <Navbar />
      <div className={sass.surahs_container}>
        <div className={sass.boxes}>
            {/* <Navbar/> */}
            <h1>{surah?.data?.name}</h1>
            <h1><span>{surah?.data?.number}</span> - {surah?.data?.englishName}</h1>
          {surah?.data?.ayahs?.map((s, i) => (
            <div className={sass.box} key={i} id={"box"}>
                
              <h2>
                <span>{surah?.data?.number}</span>:
                <span>{s.numberInSurah}</span>
              </h2>
              <p className={sass.arabic}>{audioData[i]?.text}</p>
              <h4>{s.name}</h4>
              <p className={sass.text}>{s.text}</p>
              <p>{s.revelationType}</p>
             
                <Button className={s.player} ref={audioRef}  onClick={() => Audio(s?.number)} 
              icon="pi pi-play" rounded severity="secondary"
               aria-label="Bookmark" />
              
            </div>
          ))}
        </div>
      </div>
      <ScrollTop p-scrolltop-sticky />
    </div>
  )
    
 
};

export default ReadQuran;
