import { FC } from 'react';
import Player from '../../../types/Player.ts';
import './PlayerListItem.scss';
import PlayerImg from '../../../assets/CardsHP1.jpeg';

export const PlayerListItem: FC<{player: Player}> = ({ player }) => {
  return (
    <li className='player-list-item'>
      <img src={PlayerImg}/>
      <div>
        <b>{player.name}</b>
        <p>{player.profession}</p>
        <p>{player.clearance}</p>
      </div>
    </li>
  );
}