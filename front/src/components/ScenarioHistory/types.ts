import Scenario from '../../models/Scenario.tsx';

export interface ScenarioHistory {
  id: number;
  news: string;
  creationDate: string;
  brief: Scenario;
}