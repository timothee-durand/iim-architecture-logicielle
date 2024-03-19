import EditScenarioBody from "./EditScenarioBody";
import EditScenarioHeader from "./EditScenarioHeader";
import './EditScenario.scss';

function EditScenario() {

    return (
        <div className="edit-scenario-container">
            <EditScenarioHeader/>
            <EditScenarioBody/>
        </div>
    );
}

export default EditScenario;