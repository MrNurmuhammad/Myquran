import { createContext, useState } from "react";

export const audioContext = createContext();

const ContextProvider = ({children}) => {   
    
    const [oyah, setOyah] = useState();
    const [isplaying, setIsplaying] = useState(false);
    const [audioData, setAudioData] = useState([]);
    const [audioId, setAudioId] = useState(1);
    const [language, setLanguage] = useState("");
    const [currentSong, setCurrentSong] = useState();

    return(
        <audioContext.Provider value={{audioId, setAudioId,
         language, setLanguage, audioData, setAudioData,  isplaying, setIsplaying, currentSong, setCurrentSong}}>
            <>
                {children}
            </>
        </audioContext.Provider>
    )
}

export default ContextProvider