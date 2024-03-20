// the EditScenarioHeader component will allow the user to create a scenario
// which will set scenario's state to the GeneratedScenario component

import EditScenarioBody from "./EditScenarioBody";
import EditScenarioHeader from "./EditScenarioHeader";
import "./EditScenario.scss";
import { useState } from "react";
import Scenario from "../../models/Scenario";
import SideBar from "../SideBar/SideBar";

function EditScenario() {
  const [scenario, setScenario] = useState<Scenario | null>(null);

  return (
    <div className="edit-scenario-container">
      <div className="side-bar-container">
        <SideBar pagesName="Edit Scenario" />
      </div>
      <div className="edit-scenario-main">
        <EditScenarioHeader onScenarioSubmit={setScenario} />
        <EditScenarioBody theScenario={scenario} />
      </div>
      <div className="start-scenario">
        <h2>{scenario ? "Go with this scenario" : "You have to generate scenario"}</h2>
        <p>{scenario?.title}</p>
      </div>
    </div>
  );
}

export default EditScenario;
