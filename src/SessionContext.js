import React, { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);
  const [id, setId] = useState(null);
  const [rapports, setRapports] = useState([]);

  return (
    <SessionContext.Provider value={{ sessionId, setSessionId, rapports, setRapports, id, setId }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};
