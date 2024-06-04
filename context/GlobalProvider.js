import React, { createContext, useContext, useEffect, useState } from "react";
import { getTokenData} from '../middleware/Auth'
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token')
  
    useEffect(() => {
      getTokenData(token)
        .then((res) => {
          if (res) {
            setIsLogged(true);
            setUser(res);
          } else {
            setIsLogged(false);
            setUser(null);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [token]);
    return (
        <GlobalContext.Provider
          value={{
            isLogged,
            setIsLogged,
            user,
            setUser,
            loading,
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    };
    
    export default GlobalProvider;