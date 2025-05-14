import React from 'react';
import { uiStrings } from '../constants/ui-strings';

const Downloads: React.FC = () => (
  <div>
    <h1>{uiStrings.pages.downloads.title}</h1>
    <p>{uiStrings.pages.downloads.description}</p>
  </div>
);

export default Downloads;
