import React from 'react';
import ImageComponent from './component/ImageComponent';
import "./App.css"
const sampleProps = {
  name: "Explorin Academy",
  count: 3,
  images: [{
    url: "https://picsum.photos/id/236/38/38",
    ready: true,
    error: false
  },
  {
    url: "https://picsum.photos/id/236/38/38",
    ready: true,
    error: false
  }]
};

const App = () => {
  return (
    <div className="app-container">
      <ImageComponent images={sampleProps.images} count={sampleProps.count} name={sampleProps.name}/>
    </div>
  );
};

export default App;

