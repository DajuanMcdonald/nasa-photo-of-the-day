import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


function App() {

    const [images, setImages] = useState([]);

    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then( res => {
            setImages(res.data);


        })
        .catch( err => {
            console.log(err.message)

        });
    }, []);

 return (
    <div className="App">
      <p>
         <span role="img" aria-label="rocket">🚀</span>
      </p>
        <div>
            <h1 className="title">{images.title}</h1>
            {/*broken image*/}
            <div className="imageContainer">

            <img src={images.url} alt={images.title}/>
            </div>

            <h3>Author: </h3>
            <p>{images.copyright}</p>
            {/*image here below*/}


            {/*<p>{images.copyright}</p>*/}
            <h3>Date: </h3>
            <p id="imageDate">{images.date}</p>
            
        </div>
        <div>
            <h3>Description: </h3>
            <p className="explain">{images.explanation}</p>

        </div>
    </div>
  );
}

export default App;
