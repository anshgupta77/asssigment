// import error from "./../service/error.png"
// const ImageComponent = ({name, count, images}) => {
//     return ( 
//         <div className="d-flex">
//             <div>

//             </div>
//             <div>
//                 <div>
//                     <h1>{name}</h1>
//                     <p>{count}+offline centers</p>
//                 </div>
//                 <div>
//                     <img src={error} width="38"/>
//                 </div>
//             </div>
//         </div>
//      );
// }
 
// export default ImageComponent;


import errorIcon from "./../service/error.png";
import yellow from "./../service/yellow.jpg"
import { useState } from "react";
const ImageComponent = ({ name, count, images }) => {
    const displayError = images.reduce(reducer, true);
    function reducer(acc, ele) {
        return acc & ele.ready;
    }
    return (
        <div className="w-full h-[200px] bg-[#0d1b2a] text-white p-6 rounded-lg flex items-center justify-between">
        {/* Image Section */}
  {/* Render Images or Placeholders */}
  <div className="flex items-center gap-2 flex-wrap w-32">

    {images.map((image, index) => (
        <div
        key={index}
        className="w-[45%] h-[45%] rounded-full bg-gray-500 flex items-center justify-center overflow-hidden"
        >
        {image.ready ? (
            image.url === "" ? (
                // Display placeholder if URL is empty
                <img src={yellow} alt="Error" className="w-9 h-9" />
                ) : (
            // Display the actual image if ready
            <img
            src={image.url}
            alt="Loaded"
            className="w-full h-full object-cover"
            />
            )
            ) : (
                // Display error icon if image is not ready
                <img src={errorIcon} alt="Error" className="w-9 h-9" />
                )}
                </div>
                ))}

        
  </div>
    
        {/* </div> */}

        {/* Title Section */}
        <div className="flex flex-row justify-between w-full mx-4">
            <div className="text-left">
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className="text-2xl text-gray-400">{count}+ offline centers</p>
            </div>

            {/* Large Error Icon Section */}
            {!displayError ?
            <div>
                <img src={errorIcon} alt="Error" className="rounded-full w-[100px] h-[100px]" />
            </div>: 
            <></> }
            

        </div>
        </div>
    );
};

export default ImageComponent;




