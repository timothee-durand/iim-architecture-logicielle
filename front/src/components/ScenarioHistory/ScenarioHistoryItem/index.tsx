import { FC } from 'react';
import { ScenarioHistory } from '../types.ts';
import './historyItem.scss';

export const ScenarioHistoryItem: FC<{scenario: ScenarioHistory}> = ({scenario}) => {
  return (
    <li key={scenario.id} className='scenario-history-item'>
      <h2>{scenario.brief.title}</h2>
      <p className='scenario-history-item__context'>{scenario.brief.context}</p>
    </li>
  );
}