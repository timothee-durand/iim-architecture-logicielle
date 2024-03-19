import React from "react";
import "./ScenarioMain.css";

const ScenarioMain: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Ajoutez ici la logique de soumission
    console.log("Form submitted");
  };
  const anecdotes: string[] = ["Anecdote 1", "Anecdote 2", "Anecdote 3"];

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-row justify- formScenario">
        <div className="flex flex-col formScenarioAnecdote">
          <label htmlFor="anecdote">Anecdote:</label>
          <select id="anecdote" name="anecdote">
            {anecdotes.map((anecdote, index) => (
              <option key={index} value={anecdote}>
                {anecdote}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col formScenarioAgentNumber">
          <label htmlFor="agentNumber">Agent Number:</label>
          <input
            type="number"
            id="agentNumber"
            name="agentNumber"
            min={1}
            max={10}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
      </div>
    </div>
  );
};

export default ScenarioMain;
