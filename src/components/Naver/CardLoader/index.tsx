import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 200 250"
      style={{ width: '100%' }}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="206" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="222" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="-3" rx="2" ry="2" width="200" height="200" />
    </ContentLoader>
  );
};

export default CardLoader;
