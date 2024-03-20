// the EditScenarioHeader component will allow the user to create a scenario
// which will set scenario's state to the GeneratedScenario component

import EditScenarioBody from './EditScenarioBody';
import EditScenarioHeader from './EditScenarioHeader';
import './EditScenario.scss';
import { useState } from 'react';
import Scenario from '../../models/Scenario';
import { api } from '../../services/api.ts';

function EditScenario() {

  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async ({ anecdote, agentNumber }: { anecdote: string, agentNumber: number }) => {
    setIsLoading(true);
    try {
      console.log('anecdote', anecdote, 'agentNumber', agentNumber);
      const { data: scenario } = await api.post<Scenario>('sentinelle/briefs', {
        news: anecdote,
        characterNumber: agentNumber,
      });
      setScenario(scenario);

    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="edit-scenario-container">
      <EditScenarioHeader onSubmit={handleGenerate} />
      {
        isLoading ?
        <p>Loading</p> :
        <EditScenarioBody theScenario={scenario} />
      }
    </div>
  );
}

export default EditScenario;