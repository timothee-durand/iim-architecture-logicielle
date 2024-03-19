// the EditScenarioHeader component will allow the user to create a scenario
// which will set scenario's state to the GeneratedScenario component

import EditScenarioBody from "./EditScenarioBody";
import EditScenarioHeader from "./EditScenarioHeader";
import './EditScenario.scss';
import { useState } from "react";
import Scenario from "../../models/Scenario";

function EditScenario() {
    
  const [scenario, setScenario] = useState<Scenario | null>(null);

    return (
        <div className="edit-scenario-container">
            <EditScenarioHeader onScenarioSubmit={setScenario}/>
            <EditScenarioBody theScenario={scenario}/>
        </div>
    );
}

export default EditScenario;