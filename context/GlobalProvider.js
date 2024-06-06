import React, { createContext,useEffect, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { fireAuth } from "../middleware/FireBaseConfig";
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
   
    return (
        <GlobalContext.Provider
          value={{
            user,
            isLoading
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    };
    
    export default GlobalProvider;