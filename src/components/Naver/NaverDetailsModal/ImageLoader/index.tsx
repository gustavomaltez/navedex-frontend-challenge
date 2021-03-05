import React from 'react';
import ContentLoader from 'react-content-loader';

const ImageLoader: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 400 400"
      style={{ width: '100%' }}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="20" y="20" rx="2" ry="2" width="360" height="360" />
    </ContentLoader>
  );
};

export default ImageLoader;
