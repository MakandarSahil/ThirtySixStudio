import React from "react";
import Canvas from "./components/Canvas";
import data from "./canvas/data";

function App() {
  return (
    <>
      <div className="w-full relative min-h-screen">
        {data[0].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))}
      </div>
      <div className="w-full relative min-h-screen">
        {data[1].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))}
      </div>
      <div className="w-full relative min-h-screen">
        {data[2].map((canvasDetails, index) => (
          <Canvas key={index} details={canvasDetails} />
        ))}
      </div>
    </>
  );
}

export default App;
