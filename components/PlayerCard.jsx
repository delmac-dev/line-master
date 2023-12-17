import Input from '@/components/Input'
import React from 'react'
import Image from 'next/image'

const PlayerCard = ({player, setPlayers, index, disabled}) => {
  
  return (
    <div className="w-64 py-3 px-3 border rounded-lg flex_center justify-start gap-4">
        <div 
          style={{backgroundColor: player.color}} 
          className="w-14 aspect-square rounded-md flex_center text-xl font-bold bg-secondary"
        >
          {player.avatar !== null ?
            (<Image 
                src={"/" + player.avatar} 
                alt={player.avatar.split('.')[0]} 
                width={45} 
                height={45} 
                className='object-contain' 
              />)
            :
            (player.name.slice(0,1))
          }
        </div>
        <Input 
          disabled={disabled}
          value={player.name}
          setValue={(e) => {
            let updatedPlayer = player;
            updatedPlayer.name = e.target.value;
            setPlayers((players) => players.map((p, _i) => index === _i ? updatedPlayer : p));
          }}
        />
    </div>
  )
}

export default PlayerCard