"use client";

import { useEffect } from 'react';
import PlayerCard from '@/components/PlayerCard';
import { useGameContext } from '@/hooks/context';
import { colors, avatars } from '@/constants';
import { generatePoints, generateBoxes, generateLines } from '@/lib/utils';
import Radio from '@/components/Radio';
import Image from 'next/image';
import Button from '@/components/Button';

const Select = () => {
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

  useEffect(() => {
    const initialiseGame = () => {
      const initialPlayers = [
        {
          name: "Player 1",
          avatar: null,
          score: 0,
          wins: 0,
          color: colors[0].value
        },
        {
          name: "Player 2",
          avatar: null,
          score: 0,
          wins: 0,
          color: colors[1].value
        },
      ]
      setPlayers(initialPlayers);
      setBoxes(generateBoxes());
      setPoints(generatePoints());
    };

    initialiseGame();
  }, []);

  useEffect(()=>{
    console.log(points,boxes);
  }, [points])



  return (
    <section className='w-full min-h-screen py-20 flex_center items-start'>
      <div className="flex_center items-start flex-col gap-10">
        <h1 className="heading_2 text-center w-full">Configure Game</h1>
        <div className="flex_center gap-10 w-full">
          {players.map((player, index) => (
            <PlayerCard 
              key={index} 
              player={player} 
              setPlayers={setPlayers}  
              index={index}
            />
          ))}
        </div>
        <div className="flex_center gap-10 w-full">
          {players.map((player, index) => (
            <div key={index} className="p-3 rounded-md border grid grid-cols-3 grid-flow-row gap-4">
              {colors.map((color, i) => (
                <Radio 
                  key={i}
                  name={`color-${index}`}
                  value={color.value}
                  index={i}
                  handleChecked={(e)=> {
                    let updatedPlayer = player;
                    updatedPlayer.color = e.target.value;
                    setPlayers((players) => players.map((p, _i) => index === _i ? updatedPlayer : p));
                  }}
                >
                  <label 
                    htmlFor={`input-color-${index}-${i}`} 
                    style={{backgroundColor: color.value}} 
                    className="w-12 aspect-square rounded-full border-4 border-foreground/70 hover:border-foreground/90 cursor-pointer" 
                  />
                </Radio>
              ))}
            </div>
          ))}
        </div>
        <div className="flex_center gap-10 w-full">
          {players.map((player, index) => (
              <div key={index} className="p-3 rounded-md border grid grid-cols-3 grid-flow-row gap-4">
                <Radio
                  name={`avatar-${index}`}
                  value= ''
                  index={'null'}
                  handleChecked={(e)=>{
                    let updatedPlayer = player;
                    updatedPlayer.avatar = null
                    setPlayers((players) => players.map((p, _i) => index === _i ? updatedPlayer : p));
                  }}
                >
                  <label 
                    htmlFor={`input-avatar-${index}-null`}
                    style={{backgroundColor: player.color?? 'red'}}
                    className='w-12 aspect-square rounded-full flex_center text-xl font-bold border-4 border-foreground/70 hover:border-foreground/90 cursor-pointer'
                  >
                    {player.name.slice(0,1)}
                  </label>
                </Radio>
                {avatars.map((avatar, i) => (
                  <Radio 
                    key={i}
                    name={`avatar-${index}`}
                    value={avatar}
                    index={i}
                    handleChecked={(e)=> {
                      let updatedPlayer = player;
                      updatedPlayer.avatar = e.target.value;
                      setPlayers((players) => players.map((p, _i) => index === _i ? updatedPlayer : p));
                    }}
                  >
                    <label 
                      htmlFor={`input-avatar-${index}-${i}`} 
                      style={{backgroundColor: player.color}} 
                      className="w-12 overflow-hidden aspect-square rounded-full flex_center border-4 border-foreground/70 hover:border-foreground/90 cursor-pointer" 
                    >
                      <Image src={"/" + avatar} alt={avatar.split('.')[0]} width={45} height={45} className='object-contain' />
                    </label>
                  </Radio>
                ))}
              </div>
          ))}
        </div>
        <div className="flex_center gap-10 w-full">
          {/* buttons */}
          <Button link={'/game'}>Play Game</Button>
          <Button link={'/'}>Cancel</Button>
        </div>
      </div>
    </section>
  )
}

export default Select