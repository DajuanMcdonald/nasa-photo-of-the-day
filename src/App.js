import React from "react";
import "./App.css";
import { ImageList } from "src/ImageList.js";


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket">🚀!</span>
      </p>
        <div>
            <ImageList/>
        </div>
    </div>
  );
}

export default App;
