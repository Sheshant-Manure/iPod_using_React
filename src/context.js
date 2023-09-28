import { createContext, useContext, useState } from "react";
const screenContext = createContext();
export const useValue = () => {
    const value = useContext(screenContext);
    return value;
}

const ScreenContext = ({children}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    return (
        <screenContext.Provider value={ { showMenu, setShowMenu, activeItem, setActiveItem } }>
            {children}
        </screenContext.Provider>
    );
}
export default ScreenContext;