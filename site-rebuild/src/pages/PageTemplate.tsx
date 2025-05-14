import React from 'react';
import { Link } from 'react-router-dom';
import { uiStrings } from '../constants/ui-strings';
import { MetaTags } from '../components/MetaTags';
import { ErrorBoundary } from '../components/ErrorBoundary';

interface PageTemplateProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, description, children }) => (
  <ErrorBoundary>
    <MetaTags title={title} description={description} />
    <div>
      <nav style={{ marginBottom: '2em' }}>
        {uiStrings.navigation.items.map(link => (
          <Link
            key={link.path}
            to={link.path}
            style={{ marginRight: '1em' }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
      <footer style={{ marginTop: '2em', textAlign: 'center', padding: '1em' }}>
        {uiStrings.common.metadata.copyright}
      </footer>
    </div>
  </ErrorBoundary>
);

export default PageTemplate; 