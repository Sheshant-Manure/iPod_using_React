import { createContext, useContext, useState } from "react";
const screenContext = createContext();
export const useValue = () => {
    const value = useContext(screenContext);
    return value;
}

const ScreenContext = ({children}) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <screenContext.Provider value={ { showMenu, setShowMenu } }>
            {children}
        </screenContext.Provider>
    );
}
export default ScreenContext;