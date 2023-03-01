import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import { timeData } from '../../utils/instanse'
import sass from './prayerTime.module.scss'
import rise from '../../assets/rising.jpg'
import sun from '../../assets/sun.png'
import quyosh from '../../assets/cloud and sun.png'
import xufton from '../../assets/moon.png'
import asr from '../../assets/cloudsun.png';
import shom from '../../assets/down.png'


const PrayerTime = () => {

  const [time, setTime] = useState('');
  const [region, setRegion] = useState("Denov")
  const [isActive, setIsActive] = useState(false)
  
  console.log(isActive);
  useEffect(() => {

    timeData.get(`day?region=${region}`).then((res) =>setTime(res?.data))

    // if(time >= time.times?.tong_saharlik){
    //   setIsActive(true)
    // }else if(time >= time.times.quyosh){
    //   setIsActive(true)
    // }
    // else if(time >= time.times.peshin){
    //   setIsActive(true)
    // }
    // else if(time >= time.times.asr){
    //   setIsActive(true)
    // }
    // else if(time >= time.times.shom_iftor){
    //   setIsActive(true)
    // }
    // else {
    //   setIsActive(true)
    // }
  },[region])
  console.log(region, "region");
  return (
    <div>

        <Navbar/>

        <div className={sass.prayerTime}>
          <h1>Namoz vaqtlari</h1>
          <div className={sass.wrapper}>
          <div className={sass.header}>
            
              <h2>Mintaqa: <span>{time.region}</span></h2>
              <h2>Hozirgi vaqt: <span>{time.date}</span></h2>
              <h2>Kun: <span>{time.weekday}</span></h2>

          </div>
          <select  className={sass.select} id="lang"
           onChange={e => setRegion(e.target.value)}  defaultValue={region}>

            <option value="Toshkent">Toshkent</option>
            <option value="Denov">Denov</option>
            <option value="Andijon">Andijon</option>
            <option value="Namangan">Namangan</option>
            <option value="Farg'ona">Farg'ona</option>
            <option value="Guliston">Guliston</option>
            <option value="Jizzax">Jizzax</option>
            <option value="Qarshi">Qarshi</option>
            <option value="Samarqand">Samarqand</option>
            <option value="Navoiy">Navoiy</option>
            <option value="Buxoro">Buxoro</option>
            <option value="Xiva">Xiva</option>
            <option value="Nukus">Nukus</option>
          </select>
            <div className={sass.cards}>
              <div className={sass.card}>
              <img src={rise} alt="sun rising" />
              <h1>TONG</h1>
              <span>{time?.times?.tong_saharlik}</span>
              </div>
              <div className={sass.card}>
              <img src={quyosh} alt="sun rising" />
              <h1>QUYOSH</h1>
              <span>{time?.times?.quyosh}</span>
              </div>
              <div className={sass.card}>
              <img src={sun} alt="sun rising" />
              <h1>PESHIN</h1>
              <span>{time?.times?.peshin}</span>
              </div>
              <div className={sass.card}>
              <img src={asr} alt="sun rising" />
              <h1>ASR</h1>
              <span>{time?.times?.asr}</span>
              </div>
              <div className={sass.card}>
              <img src={shom} alt="sun rising" />
              <h1>SHOM</h1>
              <span>{time?.times?.shom_iftor}</span>
              </div>
              <div className={sass.card}>
              <img src={xufton} alt="sun rising" />
              <h1>XUFTON</h1>
              <span>{time?.times?.hufton}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PrayerTime