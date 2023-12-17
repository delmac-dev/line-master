"use client";
import { useState, useEffect } from "react";
import { useGameContext } from "@/hooks/context";
import { generatePoints, generateBoxes, generateLines } from '@/lib/utils';
import PlayerCard from "@/components/PlayerCard";
import Button from "@/components/Button";
import Grid from "@/components/Grid";
import Line from "@/components/Line";
import Point from "@/components/Point";
import Box from "@/components/Box";

const Game = () => {
  const { 
    players, 
    setPlayers, 
    setPoints, 
    setBoxes, 
    setLines, 
    setActive, 
    setActivePlayer,
    points,
    boxes,
    lines
  } = useGameContext();


  return (
    <main className="w-full min-h-screen py-20 flex_center items-start">
      <section className="flex_center items-start flex-col gap-10">
        <div className="flex_center gap-10 w-full">
          {players.map((player, index) => (
            <PlayerCard 
              key={index} 
              player={player} 
              setPlayers={setPlayers}  
              index={index}
              disabled
            />
          ))}
        </div>
        <Grid>

        </Grid>
        <div className="flex_center gap-10 w-full">
          <Button link={'/'}>Quit</Button>
          <Button link={'/select'}>Restart</Button>
        </div>

      </section>
    </main>
  )
}

export default Game