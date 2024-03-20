// ProgressCreation.tsx
import React from 'react';
import "./ProgressCreation.scss";

/**
 * Interface for the props of the ProgressCreation component.
 * @interface
 * @property {number} currentStep - The current step of the progress bar.
 */
interface ProgressCreationProps {
    currentStep: number;
}

/**
 * ProgressCreation component is responsible for rendering a progress bar.
 * The progress bar has three sections, each representing a step.
 * The current step is passed as a prop.
 * The component adds an "active" classname to the sections of the steps that have been completed.
 * @param {ProgressCreationProps} props - The props of the ProgressCreation component.
 * @returns {React.FC} The rendered component
 */
const ProgressCreation: React.FC<ProgressCreationProps> = ({ currentStep }) => {
    return (
        <div className="progress-bar">
            <span className={`progress-bar__section progress-bar__section--first ${currentStep > 0 ? 'active' : ''}`}>
                <span></span>
            </span>
            <span className={`progress-bar__section progress-bar__section--second ${currentStep > 1 ? 'active' : ''}`}>
                <span></span>
            </span>
            <span className={`progress-bar__section progress-bar__section--third ${currentStep > 2 ? 'active' : ''}`}>
                <span></span>
            </span>
        </div>
    );
};

export default ProgressCreation;