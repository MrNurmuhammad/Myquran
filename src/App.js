import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import { AudioPlayer } from './components/audioPlayer/audioPlayer';
import Home from './pages/home/home';
import PrayerTime from './pages/prayerTime/prayerTime';
import Quran from './pages/quran/quran';
import ReadQuran from './pages/readQuran/readQuran';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/prayertime" element={<PrayerTime/>}/>
        <Route path="/quran" element={<Quran/>}/>
        <Route path="/quran/:number" element={<ReadQuran/>}/>

      </Routes>
    </div>
  );
}

export default App;
