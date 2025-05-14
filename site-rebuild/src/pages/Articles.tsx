import React from 'react';
import { uiStrings } from '../constants/ui-strings';

const Articles: React.FC = () => (
  <div>
    <h1>{uiStrings.pages.articles.title}</h1>
    <p>{uiStrings.pages.articles.description}</p>
  </div>
);

export default Articles;
