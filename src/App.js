import React from 'react';
import ImageLoader from './component/Image';
import "./App.css"
const sampleProps = {
  name: 'Gallery Photo',
  count: 4,
  images: [
    { url: 'https://picsum.photos/id/236/100/80 ', ready: true, error: false },
    { url: 'https://picsum.photos/id/237/100/80 ', ready: false, error: true },
    { url: 'https://picsum.photos/id/238/100/80 ', ready: false, error: true },
  ],
};

const App = () => {
  return (
    <div className="app-container">
      <h1>{sampleProps.name}</h1>
      <ImageLoader images={sampleProps.images} count={sampleProps.count} />
    </div>
  );
};

export default App;

