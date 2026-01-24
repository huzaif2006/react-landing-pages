import React from 'react';
import './CraftProcess.css';

const CraftProcess = ({ heading, steps }) => {
  return (
    <section className="craft-process">
      <div className="craft-container">
        <h2 className="craft-heading">{heading}</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">
                <span>{index + 1}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftProcess;
