import {createContext, useContext, useState, PropsWithChildren} from "react";

const TokenContext = createContext({
  token: '',
  setToken: (token: string) => {}
});

export const TokenProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState(() => (
    localStorage.getItem('token') ?? ''
  ));
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export const useToken = () => {
  const {token, setToken} = useContext(TokenContext);

  return {
    token, setToken
  }
}