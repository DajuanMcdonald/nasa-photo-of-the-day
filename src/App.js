import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


function App() {

    const [images, setImages] = useState([]);

    useEffect(() => {

    axios
        .get('https://api.nasa.gov/planetary/apod?api_key=CWMpwYsCugMG5FPhzRMRaWklHLe3WzYhMQlklR2s')
        .then( res => {
            setImages(res.data);
            console.log(res)
        })
        .catch( err => {
            console.log(err.message)
        });
    }, []);

 return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket">🚀!</span>
      </p>
        <div>
            <h1>{images.title}</h1>
            {/*image here below*/}
            <img src="{images.url}" alt=""/>
            <img src="https://apod.nasa.gov/apod/image/2001/IC405hp_ColesHelm_960.jpg" alt=""/>

            {/*<p>{images.copyright}</p>*/}
            <p>{images.date}</p>
            
        </div>
        <div>
            <p>{images.explanation}</p>

        </div>
    </div>
  );
}

export default App;
