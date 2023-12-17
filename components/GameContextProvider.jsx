"use client";

import { GameContext } from "@/hooks/context";
import { useState } from "react";

const GameContextProvider = ({children}) => {
    const [players, setPlayers] = useState([]);
    const [points, setPoints] = useState([]);
    const [boxes, setBoxes] = useState([]);
    const [lines, setLines] = useState([]);
    const [active, setActive] = useState(false);
    const [activePlayer, setActivePlayer] = useState(0);

    const contextValue = {
        players,
        setPlayers,
        points,
        setPoints,
        boxes,
        setBoxes,
        lines,
        setLines,
        active,
        setActive,
        activePlayer,
        setActivePlayer
    }
    return (
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider