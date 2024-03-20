// this component will allow the user to create a scenario
// it will take a function as a prop, which will set the scenario's state
// when the user clicks on the generate button, the scenario will be generated
// and the function will be called with the new scenario as a parameter

import { FC, useState } from 'react';
import './EditScenarioHeader.scss';

/**
 * Interface for the props of the EditScenarioHeader component.
 * @interface
 * @property {Function} onSubmit - The function to be called when the form is submitted.
 */
interface EditScenarioProps {
  onSubmit: (payload: { anecdote: string, agentNumber: number }) => void;
}

/**
 * Interface for the anecdote object.
 * @interface
 * @property {string} title - The title of the anecdote.
 * @property {string} content - The content of the anecdote.
 */
export interface Anecdote {
  title: string;
  content: string;
}

const anecdote1 = `Parti de Roissy, un Airbus d’Air France contraint de faire demi-tour après avoir déclenché un code de détresse
MAYDAY•La compagnie n’a pas précisé la nature de l’incident
L'A350 est revenu à son point de départ environ une heure après son décollage.
Un avion d’Air France parti de l’aéroport Roissy-Charles-de-Gaulle a connu un « incident technique » en plein vol ce lundi. L’appareil, un Airbus A350 qui volait vers Chennai (Inde), a dû rebrousser chemin environ 30 minutes après son décollage, rapporte Actu Paris.
L’avion a déclenché le code 7700, qui permet de signaler toute situation de détresse. Quand un pilote déclenche ce code, une alarme retentit immédiatement sur les postes de contrôle radar au sol, précise le média Téma Transport & Logistique. Lundi, les pilotes ont donc « décidé, par mesure de précaution, de faire demi-tour », a expliqué Air France à Actu Paris.
« Les pilotes et le personnel de cabine sont formés et régulièrement entraînés pour gérer ce type de situation connue et maîtrisée », a ajouté la compagnie. Mais cette dernière n’a pas donné plus d’informations sur l’incident. L’avion, qui avait décollé à 10h08, s’est posé sur la piste de l’aéroport parisien à 11h16. A bord de l'A350, se trouvaient 127 passagers.
Le même jour, un Airbus A330 de la compagnie Lufthansa parti de Francfort (Allemagne), en direction de Dubaï, a dû atterrir en urgence sur l’île grecque de Rhodes. A cause d’un problème électrique, de la fumée s’est répandue à l’intérieur de l’appareil. Les 190 passagers sont cependant sains et saufs.`;

const anecdote2 = `La vidéo d’un pickpocket confondu par les passagers d’une rame du RER D devient virale sur les réseaux sociaux.
Après avoir volé le téléphone d’une femme, l’homme se borne en dénégations alors même que l’appareil sonne dans sa poche.
Pressé par sa victime et les passagers, le voleur laisse tomber le téléphone par terre tout en continuant de crier son innocence.`;

const anecdote3 = `Avec ses carcasses de bateaux gisant sur une rive du Blavet, le cimetière de Kerhervy à Lanester, près de Lorient (Morbihan), est un endroit fascinant. Et donc prisé par les touristes curieux de découvrir et de photographier ces épaves figées dans le temps et emprisonnées dans la vase. Mais l’endroit peut aussi se révéler dangereux, comme l’a appris à ses dépens lundi une jeune femme de 28 ans. Comme le rapporte Ouest-France, cette touriste originaire de Besançon a voulu s’aventurer dans la vase pour photographier au plus près les épaves. Trop, justement, car au bout de quelques minutes, la jeune femme s’est retrouvée coincée avec des sédiments jusqu’à la taille. Des promeneurs qui assistaient à la scène ont alors prévenu les secours, la touriste étant dans l’incapacité de bouger. Les pompiers ont finalement réussi à la ramener sur la terre ferme en utilisant un paddle. En dépit de cette belle frayeur, la touriste s’en est sortie indemne.`

const anecdotes: Anecdote[] = [{
  title: 'Parti de Roissy, un Airbus d’Air France contraint de faire demi-tour après avoir déclenché un code de détresse',
  content: anecdote1,
}, {
  title: 'Paris : Grâce aux passagers du RER D elle retrouve son portable dans la poche du voleur',
  content: anecdote2,
}, {
  title: "Morbihan : Une touriste se retrouve coincée dans la vase en voulant prendre des photos",
  content: anecdote3
}];

/**
 * EditScenarioHeader component is responsible for rendering a form that allows the user to create a scenario.
 * The form includes a select input for the anecdote and a number input for the agent number.
 * When the form is submitted, the onSubmit function is called with the selected anecdote and agent number as parameters.
 * @param {EditScenarioProps} props - The props of the EditScenarioHeader component.
 * @returns {React.FC} The rendered component
 */
const EditScenarioHeader: FC<EditScenarioProps> = ({ onSubmit }) => {
  const [anecdoteIndex, setAnecdoteIndexIndex] = useState<number>(0);
  const [agentNumber, setAgentNumber] = useState(1);
  // we will generate a scenario based on the user's input

  return (
    <div className="editScenarioHeader-container">
      <div className="editScenarioHeader-anectode">
        <label className="editScenarioHeader-anectode__label --label">
          Anecdote
        </label>
        <select
          className="editScenarioHeader-anectode__selector"
          value={anecdoteIndex}
          onChange={(e) => setAnecdoteIndexIndex(parseInt(e.target.value))}
        >
          {anecdotes.map((anecdote, index) => (
            <option key={index} value={index}>
              {anecdote.title}
            </option>
          ))}
        </select>
      </div>
      <div className="editScenarioHeader-agentNumber">
        <label className="editScenarioHeader-agentNumber__label --label">
          Agent Number
        </label>
        <input
          className="editScenarioHeader-agentNumber__selector"
          type="number"
          min={0}
          max={10}
          value={agentNumber}
          onChange={(e) => setAgentNumber(Number(e.target.value))}
        />
      </div>
      <button onClick={() => onSubmit({ anecdote: anecdotes[anecdoteIndex].content, agentNumber })}>Generate</button>
    </div>
  );
};

export default EditScenarioHeader;
