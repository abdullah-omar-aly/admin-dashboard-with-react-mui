import { createContext , useContext, useState } from "react";

const SidebarContext = createContext()

export const SidebarProvider = ({children}) => {
    const [ isCollapsed , setIsCollapsed ] = useState(false)

    const toggleCollapse = () => setIsCollapsed(isCollapsed ? false : true)
    
    return <SidebarContext.Provider value={{isCollapsed , toggleCollapse}}>
        {children}
    </SidebarContext.Provider>
}
export const useSidebar = () =>  useContext(SidebarContext)