interface Schema {
  name: string;
  description: string;
} 

interface Scenario {
  title: string;
  context: string;
  objectives: string[];
  stakes: string;
  enemies: Schema[];
  allies: Schema[];
  resources: string;
  constraints: string;
  rewards: string;
  stages: string[];
}

export default Scenario;
