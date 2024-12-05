

import errorIcon from "./../service/error.png";
import yellow from "../service/yellow.jpg";
import loader from "./../service/loader_gif.gif"
import { useState, useEffect } from "react";

const ImageComponent = ({ name, count, images }) => {
  const [loading, setLoading] = useState(false);
  const [displayError, setDisplayError] = useState();
  const [countRetry, setCountRetry] = useState(0);

  function checkReady(images){
    const result = images.reduce((acc, image) =>acc&image.ready,true);
    return !result;
  }
  if(images.length<4){
    while(images.length != 4)
        images = [...images, {url: yellow, ready: true, error: false}];
  }
  // function increaseCount(){
  //   const intervalID = setInterval(() =>{
  //     const newCountRetry = countRetry+1;
  //     setCountRetry(newCountRetry);
  //     console.log("this here ",countRetry);
  //     if(countRetry === 3){
  //       setDisplayError(checkReady(images));
  //       clearInterval(intervalID);
  //     }
  //   }, 2000);
  // }
  useEffect(() => {
    if (countRetry < 3) {
      const timer2 = setTimeout(() => {
        console.log(countRetry);
        setCountRetry((prev) => prev + 1);
      }, 5000);

      return () => clearTimeout(timer2); // Cleanup timeout
    } else {
      setDisplayError(checkReady(images));
    }
  }, [countRetry]);

  useEffect(() =>{
    const timer1 = setTimeout(()=>{
      setLoading(true);
    }, 5000)

    return () => clearTimeout(timer1);
  }, []);
  
  return (
    <div className="w-full h-[200px] bg-[#0d1b2a] text-white p-6 rounded-lg flex items-center justify-between">
      {/* Image Section */}
      <div className="flex gap-[5px] flex-wrap w-[100px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[38px] h-[38px] rounded-full bg-gray-500 flex items-center justify-center overflow-hidden"
          >
            {image.ready ? (
                // Display the actual image if ready
                loading ? (
                <img
                  src={image.url}
                  alt="Loaded"
                  className="w-full h-full object-cover"
                />):(
                  <img src={loader} className="w-full h-full object-cover"></img>
                )
              
            ) : (
              // Display error icon if image is not ready
              (loading && (countRetry==3))? (
              <img src={errorIcon} alt="Error" className="w-full h-full object-cover" />
              ):(
                <img src={loader} className="w-full h-full object-cover"></img>
              )
            )}
          </div>
        ))}
      </div>

      {/* Title Section */}
      <div className="flex flex-row justify-between w-full mx-4">
        <div className="text-left">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="text-2xl text-gray-400">{count}+ offline centers</p>
        </div>

        {/* Large Error Icon Section */}
        {displayError && (
          <div>
            <img
              src={errorIcon}
              alt="Error"
              className="rounded-full w-[100px] h-[100px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageComponent;


