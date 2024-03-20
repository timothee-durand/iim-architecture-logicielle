/**
 * Schema interface represents a generic schema in the game.
 * It includes the name and description of the schema.
 */
interface Schema {
  name: string; // The name of the schema
  description: string; // The description of the schema
}

/**
 * Scenario interface represents a scenario in the game.
 * It includes the title, context, objectives, stakes, enemies, allies, resources, constraints, rewards, and stages of the scenario.
 */
interface Scenario {
  title: string; // The title of the scenario
  context: string; // The context of the scenario
  objectives: string[]; // The objectives of the scenario
  stakes: string; // The stakes of the scenario
  enemies: Schema[]; // The enemies in the scenario
  allies: Schema[]; // The allies in the scenario
  resources: string; // The resources in the scenario
  constraints: string; // The constraints in the scenario
  rewards: string; // The rewards in the scenario
  stages: string[]; // The stages of the scenario
}

// Export the Scenario interface as the default export
export default Scenario;