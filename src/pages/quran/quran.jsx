import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import s from './quran.module.scss'
import {author} from '../../author'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { instanse } from '../../utils/instanse'
import { audioContext } from '../../context/context'
import { ScrollTop } from 'primereact/scrolltop'
import Loader from '../../components/loader/loader'

const Quran = () => {
  const {number} = useParams()
  const nav = useNavigate()
  const [loading, setLoading] = useState(false);
  const {audioId, setAudioId} = useContext(audioContext)
  const {data, setData} = useContext(audioContext)
  const [surahs, setSurahs] = useState([])


  useEffect(()=>{
    instanse.get(`/surah`).then((res) => setSurahs(res?.data.data))
  },[])

  

  return loading ? ( 
    <Loader/>
  ) :(
    <div className={s.container}>
        <Navbar/>
        <h1 className={s.h1}>Quran</h1>
       

      <div className={s.surah}>
        {surahs?.map((surah, i) =>(
            <div className={s.cards} key={i} onClick={() => nav(`/quran/${surah.number}`)}>
              <h2 ><span>Surah: 
                {surah.number}</span>
                <span>Oyah: {surah.numberOfAyahs}</span>
              </h2>
              <h4>{surah.name}</h4>
              <h4>{surah.englishName}</h4>
              <p>{surah.revelationType}</p>
            </div>
        ))}
      </div>
      <ScrollTop p-scrolltop-sticky />
    </div>
  )
    
 
}

export default Quran