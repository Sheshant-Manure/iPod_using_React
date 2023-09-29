import { createContext, useContext, useState } from "react";
import Music from "./Components/MenuComponents/Music";
import Games from "./Components/MenuComponents/Games";
import Settings from "./Components/MenuComponents/Settings";

const screenContext = createContext();
export const useValue = () => {
    const value = useContext(screenContext);
    return value;
}

const ScreenContext = ({children}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuItem, setShowMenuItem] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    
    const renderMenuItem = () => {
        switch(activeItem) {
            case 0:
                return <Music />;
            case 1:
                return <Games />;
            case 2:
                return <Settings />;
            default:
                return null;
        }
    }
    return (
        <screenContext.Provider value={ { showMenu, setShowMenu, activeItem, setActiveItem, showMenuItem, setShowMenuItem, renderMenuItem } }>
            {children}
        </screenContext.Provider>
    );
}
export default ScreenContext;