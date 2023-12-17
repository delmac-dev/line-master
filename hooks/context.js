import { createContext, useContext } from "react";

export const GameContext = createContext(null);


export const useGameContext = () => {
    const context = useContext(GameContext);

    if(context === undefined) {
        throw new Error("useGameContext must be used within a useGameContextProvider");
    }

    return context
}