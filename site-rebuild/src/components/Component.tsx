import React from 'react';

interface ComponentProps {
  title?: string;
  description?: string;
  isLoading?: boolean;
  error?: string;
  onClick?: () => void;
  onSubmit?: (data: { name: string }) => void;
  children?: React.ReactNode;
  shouldCrash?: boolean;
}

export const Component: React.FC<ComponentProps> = ({
  title = 'Default Title',
  description = 'Default Description',
  isLoading = false,
  error,
  onClick,
  onSubmit,
  children,
  shouldCrash = false
}) => {
  if (shouldCrash) {
    throw new Error('Component crashed');
  }

  if (isLoading) {
    return <div data-testid="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onClick} aria-label="Update">Update</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          onSubmit?.({ name: formData.get('name') as string });
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          aria-describedby="name-description"
        />
        <button type="submit">Submit</button>
      </form>
      {children}
    </div>
  );
}; 