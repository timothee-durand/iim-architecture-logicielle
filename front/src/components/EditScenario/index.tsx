// the EditScenarioHeader component will allow the user to create a scenario
// which will set scenario's state to the GeneratedScenario component

import EditScenarioBody from "./EditScenarioBody";
import EditScenarioHeader from "./EditScenarioHeader";
import "./EditScenario.scss";
import { useState } from "react";
import Scenario from "../../types/Scenario.ts";
import { api } from "../../services/api.ts";
import SideBar from "../SideBar/SideBar";

function EditScenario() {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async ({
    anecdote,
    agentNumber,
  }: {
    anecdote: string;
    agentNumber: number;
  }) => {
    setIsLoading(true);
    try {
      console.log("anecdote", anecdote, "agentNumber", agentNumber);
      const { data: scenario } = await api.post<Scenario>("sentinelle/briefs", {
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
      <div className="side-bar-container">
        <SideBar pagesName="Edit Scenario" />
      </div>
      <div className="edit-scenario-main">
        <EditScenarioHeader onSubmit={handleGenerate} />
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <EditScenarioBody theScenario={scenario} />
        )}
      </div>
      {scenario ? (
        <div className="start-scenario">
          <h2>Go with this scenario</h2>
          <p>{scenario?.title}</p>
        </div>
      ) : (
        <div className="start-scenario">
          <h2>You have to generate a scenario</h2>
        </div>
      )}
    </div>
  );
}

export default EditScenario;
