import React, { useState, useEffect } from 'react';
import Status from './Status';

const Image = ({ images, count }) => {
  const placeholders = Array(count).fill(null);
  const imageArray = [...images, ...placeholders].slice(0, count);

  return (
    <div className="image-loader">
      {imageArray.map((img, index) => (
        <ImageCircle key={index} data={img} />
      ))}
    </div>
  );
};

const ImageCircle = ({ data }) => {
  const [status, setStatus] = useState(data?.ready ? 'loaded' : data?.error ? 'error' : 'placeholder');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (status === 'loading') {
      const timer = setTimeout(() => {
        if (retryCount < 3) {
          setRetryCount((prev) => prev + 1);
          setStatus(Math.random() > 0.5 ? 'loaded' : 'error'); // Simulate success or error
        } else {
          setStatus('error');
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [retryCount, status]);

  const handleRetry = () => {
    setStatus('loading');
  };

  const renderContent = () => {
    if (status === 'loaded') {
      return <img src={data?.url} alt="thumbnail" />;
    } else if (status === 'error') {
      return <div className="error-icon">⚠️</div>;
    } else if (status === 'loading') {
      return <div className="spinner">⏳</div>;
    }
    return <div className="placeholder">+</div>;
  };

  return (
    <div className="image-circle" onMouseEnter={() => console.log('Show tooltip')}>
      <Status content={`Status: ${status}, Retry Count: ${retryCount}`} />
      {renderContent()}
      {status === 'error' && retryCount < 3 && (
        <button onClick={handleRetry} className="retry-button">
          Retry
        </button>
      )}
    </div>
  );
};

export default Image;



