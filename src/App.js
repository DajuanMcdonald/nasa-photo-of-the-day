import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


function App(props) {

    const [images, setImages] = useState([]);

    useEffect(() => {

    axios
        //Promise from NASA API (APOD)
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then( res => {
            setImages(res.data);
            // console.log( 'here is the image', res.data.url);

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
            <h1 className="title">{images.title}</h1>
            <img src="{images.url}" alt=""/>
            <h3>Author: </h3>
            <p>{images.copyright}</p>
            {/*image here below*/}


            {/*<p>{images.copyright}</p>*/}
            <h3>Date: </h3>
            <p>{images.date}</p>
            
        </div>
        <div>
            <h3>Description: </h3>
            <p className="explain">{images.explanation}</p>

        </div>
    </div>
  );
}

export default App;
