// Import the EditScenario component
import EditScenario from "../../components/EditScenario";
import { Link } from 'react-router-dom';

/**
 * EditScenarioPage component is responsible for rendering the EditScenario component.
 * This page is used to edit the scenario in the application.
 * @returns {React.FC} The rendered component
 */
function EditScenarioPage() {

    // Render the EditScenario component inside a div
    return (
        <div className="edit-scenario-page ">
            <EditScenario />
        </div>
    );
}

// Export the EditScenarioPage component as the default export
export default EditScenarioPage;