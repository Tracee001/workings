import { createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
      const Name ="peter"

    return (
        <UserContext.Provider value={Name}>
            {children}
        </UserContext.Provider>
    )
}
  
