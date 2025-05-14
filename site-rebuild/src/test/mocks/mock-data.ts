import { uiStrings } from '../../constants/ui-strings';

export const mockPages = {
  home: {
    title: uiStrings.pages.home.title,
    description: uiStrings.pages.home.description,
    metaDescription: uiStrings.pages.home.metaDescription,
  },
  project: {
    title: uiStrings.pages.project.title,
    description: uiStrings.pages.project.description,
    metaDescription: uiStrings.pages.project.metaDescription,
  },
  volumeI: {
    title: uiStrings.pages.volumeI.title,
    description: uiStrings.pages.volumeI.description,
    metaDescription: uiStrings.pages.volumeI.metaDescription,
  },
};

export const mockRoutes = [
  { path: '/', title: 'Home' },
  { path: '/project', title: 'Project' },
  { path: '/volume-i', title: 'Volume I' },
  { path: '/volume-ii', title: 'Volume II' },
  { path: '/sorce-theory', title: 'Sorce Theory' },
  { path: '/articles', title: 'Articles' },
  { path: '/szi-gallery', title: 'SZI Gallery' },
  { path: '/szii-gallery', title: 'SZII Gallery' },
  { path: '/art', title: 'Art' },
  { path: '/downloads', title: 'Downloads' },
]; 