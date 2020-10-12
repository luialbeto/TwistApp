import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [user, setUser] = useState([]);
  const [voice, setVoice] = useState([]); // setar a voz Paulo apoio
  const [digit, setDigit] = useState([]); // colocar input e função para sumir áudio
  const [twist, setTwist] = useState([]); // format código
  const [isLoading, setIsLoading] = useState(true);
  const [calendar, setCalendar] = useState([]);

  const contexto = {
    user,
    setUser,
    voice,
    setVoice,
    digit,
    setDigit,
    twist,
    setTwist,
    isLoading,
    setIsLoading,
    calendar,
    setCalendar,
  };
  
  return <Context.Provider value={contexto}>{children}</Context.Provider>;
}

export default Provider;
