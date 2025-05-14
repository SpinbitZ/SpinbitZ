export interface NavigationItem {
  path: string;
  label: string;
}

export interface PageContent {
  title: string;
  description: string;
  metaDescription?: string;
}

export interface CommonUI {
  buttons: {
    submit: string;
    cancel: string;
    save: string;
    edit: string;
    delete: string;
    back: string;
    next: string;
    previous: string;
  };
  labels: {
    loading: string;
    error: string;
    success: string;
    warning: string;
    noResults: string;
    search: string;
    currentRoute: string;
  };
  errors: {
    general: string;
    notFound: string;
    unauthorized: string;
    serverError: string;
    networkError: string;
    validation: {
      required: string;
      invalidEmail: string;
      invalidUrl: string;
    };
  };
  metadata: {
    siteName: string;
    siteDescription: string;
    copyright: string;
  };
}

export interface UIStrings {
  navigation: {
    items: NavigationItem[];
  };
  pages: {
    home: PageContent;
    project: PageContent;
    volumeI: PageContent;
    volumeII: PageContent;
    sorceTheory: PageContent;
    articles: PageContent;
    sziGallery: PageContent;
    sziiGallery: PageContent;
    art: PageContent;
    downloads: PageContent;
  };
  common: CommonUI;
}

export const uiStrings: UIStrings = {
  navigation: {
    items: [
      { path: '/', label: 'Home' },
      { path: '/project', label: 'Project' },
      { path: '/volume-i', label: 'Volume I' },
      { path: '/volume-ii', label: 'Volume II' },
      { path: '/sorce-theory', label: 'Sorce Theory' },
      { path: '/articles', label: 'Articles' },
      { path: '/szi-gallery', label: 'SZI Gallery' },
      { path: '/szii-gallery', label: 'SZII Gallery' },
      { path: '/art', label: 'Art' },
      { path: '/downloads', label: 'Downloads' },
    ],
  },
  pages: {
    home: {
      title: 'Home',
      description: 'Welcome to the SpinbitZ website.',
      metaDescription: 'SpinbitZ - Exploring the intersection of art, science, and technology',
    },
    project: {
      title: 'Project',
      description: 'Project information coming soon.',
      metaDescription: 'Learn about the SpinbitZ project and its goals',
    },
    volumeI: {
      title: 'Volume I',
      description: 'Volume I content coming soon.',
      metaDescription: 'Explore Volume I of the SpinbitZ collection',
    },
    volumeII: {
      title: 'Volume II',
      description: 'Volume II content coming soon.',
      metaDescription: 'Explore Volume II of the SpinbitZ collection',
    },
    sorceTheory: {
      title: 'Sorce Theory',
      description: 'Sorce Theory content coming soon.',
      metaDescription: 'Discover the principles of Sorce Theory',
    },
    articles: {
      title: 'Articles',
      description: 'Articles coming soon.',
      metaDescription: 'Read articles about SpinbitZ and related topics',
    },
    sziGallery: {
      title: 'SZI Gallery',
      description: 'SZI Gallery content coming soon.',
      metaDescription: 'View the SZI Gallery collection',
    },
    sziiGallery: {
      title: 'SZII Gallery',
      description: 'SZII Gallery content coming soon.',
      metaDescription: 'View the SZII Gallery collection',
    },
    art: {
      title: 'Art',
      description: 'Art content coming soon.',
      metaDescription: 'Explore SpinbitZ art pieces and exhibitions',
    },
    downloads: {
      title: 'Downloads',
      description: 'Downloads coming soon.',
      metaDescription: 'Download SpinbitZ resources and materials',
    },
  },
  common: {
    buttons: {
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
    },
    labels: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      noResults: 'No results found',
      search: 'Search',
      currentRoute: 'Current Route',
    },
    errors: {
      general: 'Something went wrong. Please try again.',
      notFound: 'The requested page could not be found.',
      unauthorized: 'You are not authorized to access this resource.',
      serverError: 'Server error. Please try again later.',
      networkError: 'Network error. Please check your connection.',
      validation: {
        required: 'This field is required',
        invalidEmail: 'Please enter a valid email address',
        invalidUrl: 'Please enter a valid URL',
      },
    },
    metadata: {
      siteName: 'SpinbitZ',
      siteDescription: 'Exploring the intersection of art, science, and technology',
      copyright: '© 2024 SpinbitZ. All rights reserved.',
    },
  },
}; 