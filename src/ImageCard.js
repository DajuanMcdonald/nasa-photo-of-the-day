import React, {useState, useEffect} from "react";
import axios from "axios";
import "./ImageCard.css";
import {Button} from "reactstrap";
import Alert from "reactstrap/lib/Alert";
// import ButtonDropdown from "reactstrap/es/ButtonDropdown";

export default function CreateCard(props) {
    const [images, setImages] = useState({});
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then( res => {
                setImages(res.data);
                console.log(props);


            }).catch( err => {console.log(err.message);})
    }, []);

    return (
        <div className="App">
            <div className="container-nav"><nav> || || || <a href="">||</a> <a href="">||</a></nav></div>
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
                         <span>{images.data}</span>

                        <p className="explain">{images.explanation}</p>

                    </div>

                </div>

                <h3>Date: </h3>
                <Alert>{images.copyright}</Alert>


                <Button color="primary" size="lg">{images.date}</Button>


            </div>

        </div>



    )
}

