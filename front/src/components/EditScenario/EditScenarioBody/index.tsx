// this component will display the scenario's details
// it will take the scenario as a prop
// if the scenario is null, it will display a message to the user
// otherwise it will display the scenario's details

import Scenario from "../../../types/Scenario.ts";
import "./EditScenarioBody.scss";
import { FC } from 'react';

/**
 * Interface for the props of the EditScenarioBody component.
 * @interface
 * @property {Scenario | null} theScenario - The scenario to be displayed.
 */
interface GeneratedScenarioProps {
    theScenario: Scenario | null;
}

/**
 * EditScenarioBody component is responsible for rendering the details of a scenario.
 * The scenario is passed as a prop.
 * If the scenario is null, the component displays a message to the user.
 * Otherwise, it displays the scenario's details, including the title, context, objectives, stakes, enemies, allies, resources, constraints, rewards, and stages.
 * @param {GeneratedScenarioProps} props - The props of the EditScenarioBody component.
 * @returns {React.FC} The rendered component
 */
const EditScenarioBody: FC<GeneratedScenarioProps> = ({
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
            <div className="scenario-body">
                <h2>Title: {theScenario.title ?? ""}</h2>
                <div>
                    <h3>Context:</h3>
                    <p>{theScenario.context ?? ""}</p>
                </div>
                <div>
                    <h3>Objectives:</h3>
                    <ul>
                        {theScenario.objectives.map((objective, index) => (
                            <li key={index}>{objective}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Stakes:</h3>
                    <p>{theScenario.stakes ?? ""}</p>
                </div>
                <div>
                    <h3>Enemies:</h3>
                    <ul>
                        {theScenario.enemies.map((enemy) => (
                            <li key={enemy.name}>{enemy.name}: {enemy.description}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Allies:</h3>
                    <ul>
                        {theScenario.allies.map((ally) => (
                            <li key={ally.name}>{ally.name}: {ally.description}</li>
                        ))}
                    </ul>
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
                    <ul>
                        {theScenario.stages.map((stage, index) => (
                            <li key={index}>{stage}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
};

export default EditScenarioBody;