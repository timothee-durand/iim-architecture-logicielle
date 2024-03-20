import { FC, useEffect, useState } from 'react';
import { api } from '../../services/api.ts';
import { ScenarioHistory } from './types.ts';
import { ScenarioHistoryItem } from './ScenarioHistoryItem';
import SideBar from '../SideBar/SideBar.tsx';
import SidebarImg from "../../assets/CardsHP1.jpeg"


export const ScenarioHistoryList: FC = () => {
  const [scenarios, setScenarios] = useState<ScenarioHistory[]>([]);
  useEffect(() => {
    const fetchScenarios = async () => {
      const response = await api.get('/sentinelle/briefs');
      console.log('response', response.data);
      setScenarios(response.data);
    };
    fetchScenarios();
  }, []);
  return (
    <div style={{display:'flex', alignItems: 'stretch', height: '100%', gap: '10px', padding: '10px'}}>
      <SideBar pagesName='Scenario History' imgUrl={SidebarImg} />
      <ul style={{overflowY: 'scroll', display: 'flex', flexWrap: 'wrap'}}>
        {scenarios.map((scenario) => (
          <ScenarioHistoryItem key={scenario.id} scenario={scenario} />
        ))}
      </ul>
    </div>
  );
};