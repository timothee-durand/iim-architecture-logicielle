// this component will display the scenario's details
// it will take the scenario as a prop
// if the scenario is null, it will display a message to the user
// otherwise it will display the scenario's details

import Scenario from "../../../models/Scenario";
import "./EditScenarioBody.scss";

// we will use the Scenario model to display the scenario's details
interface GeneratedScenarioProps {
  theScenario: Scenario | null;
}

const EditScenarioBody: React.FC<GeneratedScenarioProps> = ({
  theScenario,
}) => {
  if (!theScenario) {
    return (
      <div>
        <p>Please create the scenario.</p>
      </div>
    );
  } else {
    return (
      <div className="scenarioBody">
        <h2>Title: {theScenario.title ?? ""}</h2>
        <div>
          <h3>Context:</h3>
          <p>{theScenario.context ?? ""}</p>
        </div>
        <div>
          <h3>Objectives:</h3>
          <p>{theScenario.objectives ?? ""}</p>
        </div>
        <div>
          <h3>Stakes:</h3>
          <p>{theScenario.stakes ?? ""}</p>
        </div>
        <div>
          <h3>Enemies:</h3>
          <p>{theScenario.enemies.map((enemy) => enemy.name).join(", ")}</p>
        </div>
        <div>
          <h3>Allies:</h3>
          <p>{theScenario.allies.map((ally) => ally.name).join(", ")}</p>
        </div>
        <div>
          <h3>Resources:</h3>
          <p>{theScenario.resources ?? ""}</p>
        </div>
        <div>
          <h3>Constraints:</h3>
          <p>{theScenario.constraints ?? ""}</p>
        </div>
        <div>
          <h3>Rewards:</h3>
          <p>{theScenario.rewards ?? ""}</p>
        </div>
        <div>
          <h3>Stages:</h3>
          <p>{theScenario.stages.join(", ")}</p>
        </div>
      </div>
    );
  }
};

export default EditScenarioBody;
