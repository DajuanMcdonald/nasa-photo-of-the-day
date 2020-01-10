import React, {useState, useEffect} from "react";
import axios from "axios";
import "./ImageCard.css";

export default function CreateCard(props) {
    const [images, setImages] = useState({});
    useEffect((props) => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then( res => {
                setImages(res.data);
                console.log(props);

            }).catch( err => {console.log(err.message);})
    }, []);

    return (
        <div className="App">
            <p>
                <span role="img" aria-label="rocket">🚀</span>
            </p>
            <h2>NASA's Photo of the Day</h2>
            <div>
                {/*broken image*/}
                <div className="imageContainer">

                    <div className="imgCard">

                        <img src={images.hdurl} alt={images.title}/>
                        <h1 className="title">{images.title}</h1>
                    </div>

                     <div>

                        <p className="explain">{images.explanation}</p>

                    </div>

                </div>

                <h3>Date: </h3>


                <button id="imageDate">{images.date}</button>


            </div>

        </div>



    )
}

