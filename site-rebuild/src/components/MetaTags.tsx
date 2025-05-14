import React from 'react';
import { Helmet } from 'react-helmet';
import { uiStrings } from '../constants/ui-strings';

interface MetaTagsProps {
  title: string;
  description?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  const siteName = uiStrings.common.metadata.siteName;
  const defaultDescription = uiStrings.common.metadata.siteDescription;
  
  return (
    <Helmet>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
}; 