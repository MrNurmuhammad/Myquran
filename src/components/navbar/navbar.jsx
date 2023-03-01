import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { audioContext } from '../../context/context';
import sass from './navbar.module.scss';

const Navbar = () => {
  const {language, setLanguage} = useContext(audioContext);
    // const languages = [
    //     { name: 'Uzbek' },
    //     { name: 'English' },
    //     { name: 'Russian' }
    // ];
    console.log(language);
    const nav = useNavigate();
    const backTo = () =>{
        nav(-1)
    }
  return (
    <div className={sass.navbar}>
        <h1><Link to="/"><i className="pi pi-home" style={{ fontSize: '2rem' }}></i></Link></h1>
        <h1 onClick={backTo}><i className="pi pi-arrow-left" style={{ fontSize: '2rem' }}> </i></h1>
        
        <select  className={sass.select} id="lang" onChange={e => setLanguage(e.target.value)}>
          <option value="Uzbek">Uzbek</option>
          <option value="English">English</option>
          <option value="Russia">Russia</option>
        </select>
    </div>
  )
}

export default Navbar