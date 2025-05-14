import React from 'react';
import { uiStrings } from '../constants/ui-strings';

const Art: React.FC = () => (
  <div>
    <h1>{uiStrings.pages.art.title}</h1>
    <p>{uiStrings.pages.art.description}</p>
  </div>
);

export default Art;
