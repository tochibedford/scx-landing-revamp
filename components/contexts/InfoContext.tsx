import { createContext } from "react";


export const InfoContext = createContext<{
    setIsInfoOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
    setIsInfoOpen: ()=>{}
})