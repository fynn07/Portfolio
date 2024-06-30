import { createContext, useContext } from "react";

export const RefContext = createContext();

export const useRefs = () => {
    return useContext(RefContext);
}