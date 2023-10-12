import {createContext, useContext, useState} from "react";

const HeaderContext = createContext();

export function useHeaderContext() {
    return useContext(HeaderContext);
}

export function HeaderContextProvider({ children }) {
    const [headerValue, setHeaderValue] = useState('파크 골프');


    return (
        <HeaderContext.Provider value={{ headerValue, setHeaderValue }}>
            {children}
        </HeaderContext.Provider>
    );
}