import { createContext } from "react";

export const InfoContext = createContext<{
    isInfoOpen?: boolean,
    setIsInfoOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
    isInfoOpen: false,
    setIsInfoOpen: () => { }
})
