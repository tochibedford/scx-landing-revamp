import { createContext } from "react";
import {modelInfo} from '../../pages/api/models'

export const InfoContext = createContext<{
    isInfoOpen?: boolean,
    setIsInfoOpen: React.Dispatch<React.SetStateAction<boolean>>,
    info: modelInfo[]
}>({
    isInfoOpen: false,
    setIsInfoOpen: () => { },
    info: []
})
