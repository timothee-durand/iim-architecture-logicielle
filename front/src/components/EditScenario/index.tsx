// EditScenario/index.tsx
import EditScenarioBody from "./EditScenarioBody";
import EditScenarioHeader from "./EditScenarioHeader";
import "./EditScenario.scss";
import { useState } from "react";
import Scenario from "../../types/Scenario.ts";
import { api } from "../../services/api.ts";
import SideBar from "../SideBar/SideBar";
import SidebarImg from "../../assets/CardsHP1.jpeg"

/**
 * EditScenario component is responsible for rendering the scenario editing page.
 * The page includes a sidebar, a header for creating a scenario, and a body for displaying the details of the scenario.
 * The component uses the useState hook to manage the state of the scenario and the loading state.
 * When the form in the header is submitted, the handleGenerate function is called.
 * The handleGenerate function sends a post request to the "sentinelle/briefs" endpoint with the anecdote and agent number as parameters.
 * If the request is successful, the scenario is updated with the response data.
 * If the request fails, an error message is logged to the console.
 * While the request is being processed, a loading message is displayed.
 * If the scenario is null, a message is displayed to the user to generate a scenario.
 * Otherwise, the details of the scenario are displayed.
 * @returns {React.FC} The rendered component
 */
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
        <SideBar pagesName="Edit Scenario" imgUrl={SidebarImg}/>
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