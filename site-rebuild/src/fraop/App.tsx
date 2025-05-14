import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTemplate from '../pages/PageTemplate';
import { uiStrings } from '../constants/ui-strings';
import { TestError } from '../components/TestError';

// Page Components
const Home = () => (
  <PageTemplate 
    title={uiStrings.pages.home.title}
    description={uiStrings.pages.home.metaDescription}
  >
    <p>{uiStrings.pages.home.description}</p>
  </PageTemplate>
);

const Project = () => (
  <PageTemplate 
    title={uiStrings.pages.project.title}
    description={uiStrings.pages.project.metaDescription}
  >
    <p>{uiStrings.pages.project.description}</p>
  </PageTemplate>
);

const VolumeI = () => (
  <PageTemplate 
    title={uiStrings.pages.volumeI.title}
    description={uiStrings.pages.volumeI.metaDescription}
  >
    <p>{uiStrings.pages.volumeI.description}</p>
  </PageTemplate>
);

const VolumeII = () => (
  <PageTemplate 
    title={uiStrings.pages.volumeII.title}
    description={uiStrings.pages.volumeII.metaDescription}
  >
    <p>{uiStrings.pages.volumeII.description}</p>
  </PageTemplate>
);

const SorceTheory = () => (
  <PageTemplate 
    title={uiStrings.pages.sorceTheory.title}
    description={uiStrings.pages.sorceTheory.metaDescription}
  >
    <p>{uiStrings.pages.sorceTheory.description}</p>
  </PageTemplate>
);

const Articles = () => (
  <PageTemplate 
    title={uiStrings.pages.articles.title}
    description={uiStrings.pages.articles.metaDescription}
  >
    <p>{uiStrings.pages.articles.description}</p>
  </PageTemplate>
);

const SZIGallery = () => (
  <PageTemplate 
    title={uiStrings.pages.sziGallery.title}
    description={uiStrings.pages.sziGallery.metaDescription}
  >
    <p>{uiStrings.pages.sziGallery.description}</p>
  </PageTemplate>
);

const SZIIGallery = () => (
  <PageTemplate 
    title={uiStrings.pages.sziiGallery.title}
    description={uiStrings.pages.sziiGallery.metaDescription}
  >
    <p>{uiStrings.pages.sziiGallery.description}</p>
  </PageTemplate>
);

const Art = () => (
  <PageTemplate 
    title={uiStrings.pages.art.title}
    description={uiStrings.pages.art.metaDescription}
  >
    <p>{uiStrings.pages.art.description}</p>
  </PageTemplate>
);

const Downloads = () => (
  <PageTemplate 
    title={uiStrings.pages.downloads.title}
    description={uiStrings.pages.downloads.metaDescription}
  >
    <p>{uiStrings.pages.downloads.description}</p>
  </PageTemplate>
);

const NotFound = () => (
  <PageTemplate 
    title="Not Found"
    description="Page not found"
  >
    <p>The page you are looking for does not exist.</p>
  </PageTemplate>
);

const App: React.FC = () => (
  <Router>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/volume-i" element={<VolumeI />} />
        <Route path="/volume-ii" element={<VolumeII />} />
        <Route path="/sorce-theory" element={<SorceTheory />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/szi-gallery" element={<SZIGallery />} />
        <Route path="/szii-gallery" element={<SZIIGallery />} />
        <Route path="/art" element={<Art />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </Router>
);

export default App; 