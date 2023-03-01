import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const nav = useNavigate();

  return (
    <div className="container">
        <div className="loader">
          <div className="prayertime" onClick={() => nav("/prayertime")}>

            <h1>
              Namoz <br /> vaqtlari
            </h1>
          </div>
          <div onClick={() => nav("/quran")} className="quron">
            <h1 to="/quran">Qur'on</h1>
          </div>
        </div>
      
    </div>
  );
};

export default Home;
