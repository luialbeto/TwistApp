import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [user, setUser] = useState([]);
  const [voice, setVoice] = useState([]);
  const [digit, setDigit] = useState([]);
  const [twist, setTwist] = useState([]);
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
