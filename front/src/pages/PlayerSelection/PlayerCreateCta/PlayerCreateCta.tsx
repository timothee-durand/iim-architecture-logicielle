import { FC } from 'react';
import Player from '../../../types/Player.ts';
import { api } from '../../../services/api.ts';
import { useAtom } from 'jotai/index';
import { characterInfos } from '../../../components/atoms.ts';
import { useNavigate } from 'react-router-dom';
import './PlayerCreateCta.scss';
import RightArrow from '../../../assets/right-arrow.png';

export const PlayerCreateCta: FC = () => {
  const [character] = useAtom(characterInfos);
  const navigate = useNavigate();

  async function onClick() {
    const player: Omit<Player, 'id'> = {
      name: character.infos.name,
      profession: character.infos.profession,
      clearance: character.infos.clearance,
      physical: character.adjectives.PHYSICAL,
      mental: character.adjectives.MENTAL,
      social: character.adjectives.SOCIAL,
    };
    await api.post('/characters', player);
    navigate('/players');
  }

  return (
    <button className='player-create-cta' onClick={onClick}>
      <img src={RightArrow}/>
      <span className='player-create-cta__label'>Go with this player</span>
      <span>{character.infos.name}</span>
    </button>
  );
}