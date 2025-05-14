import React from 'react';
import { uiStrings } from '../constants/ui-strings';

const Project: React.FC = () => (
  <div>
    <h1>{uiStrings.pages.project.title}</h1>
    <p>{uiStrings.pages.project.description}</p>
  </div>
);

export default Project;
