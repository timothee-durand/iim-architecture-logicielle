// ProgressCreation.tsx
import React from 'react';
import "./ProgressCreation.scss";

interface ProgressCreationProps {
    currentStep: number;
}

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