import {createContext, useContext, useState, PropsWithChildren, useCallback} from "react";

const TokenContext = createContext({
  token: '',
  setToken: (token: string) => {}
});

interface TokenProvider extends PropsWithChildren {
  initialToken: string
}

export const TokenProvider = ({ initialToken, children }: TokenProvider) => {
  const [token, _setToken] = useState(initialToken);
  const setToken = useCallback((newToken: string) => {
    _setToken(newToken);
    // @ts-ignore
    window.cookieStore?.set('token', newToken);
  }, []);

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