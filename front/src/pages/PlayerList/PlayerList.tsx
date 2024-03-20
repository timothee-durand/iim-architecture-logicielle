import { FC, useEffect, useState } from 'react';
import Player from '../../types/Player.ts';
import { api } from '../../services/api.ts';
import SideBar from '../../components/SideBar/SideBar.tsx';
import './PlayerList.scss';
import { PlayerListItem } from './PlayerListItem/PlayerListItem.tsx';

export const PlayerList: FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await api.get<Player[]>('/characters');
      setPlayers(response.data);
    };
    fetchPlayers();
  }, []);
  return (
    <div className='player-list-page'>
      <div className="side-bar-container">
        <SideBar pagesName="Player List" />
      </div>
      <div>
        <ul className='player-list'>
          {players.map((player) => (
            <PlayerListItem key={player.id} player={player} />
          ))}
        </ul>
      </div>
    </div>
  );
};