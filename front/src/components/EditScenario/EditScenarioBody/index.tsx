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
        <h3>Contexte:</h3>
        <p>{theScenario.contexte ?? ""}</p>
        <h3>Objectives:</h3>
        <p>{theScenario.objectives ?? ""}</p>
        <h3>Stakes:</h3>
        <p>{theScenario.stakes ?? ""}</p>
        <h3>Enemis:</h3>
        <p>{theScenario.enemis ?? ""}</p>
        <h3>Allies:</h3>
        <p>{theScenario.allies ?? ""}</p>
        <h3>Ressources:</h3>
        <p>{theScenario.ressources ?? ""}</p>
        <h3>Constraints:</h3>
        <p>{theScenario.constraints ?? ""}</p>
        <h3>Rewards:</h3>
        <p>{theScenario.rewards ?? ""}</p>
        <h3>Steps:</h3>
        <p>{theScenario.steps ?? ""}</p>
      </div>
    );
  }
};

export default EditScenarioBody;
