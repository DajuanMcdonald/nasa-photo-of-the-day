import React, {useState, useEffect} from "react";
import axios from "axios";
import "./ImageCard.css";
import {Card, CardBody, Col, CardImg, CardSubtitle, CardText, CardTitle, Nav, NavLink} from "reactstrap";
import Button from "@material-ui/core/Button";
import Alert from "reactstrap/lib/Alert";
// import ButtonDropdown from "reactstrap/es/ButtonDropdown";

export default function CreateCard() {
    const [images, setImages] = useState({});

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then( res => {
                setImages(res.data);
                console.log(res.data);


            }).catch( err => {console.log(err.message);})
    }, []);

    return (
        <div className="App">
            <div className="container-nav"><Nav> || || || <NavLink href="">||</NavLink> <a href="">||</a></Nav></div>
                <div>
                <Button variant="contained" color="primary">🚀</Button>
                </div>
                <h2>NASA's Photo of the Day</h2>
                <Card>
                    {/*broken image*/}
                    <CardBody className="imageContainer">

                        <Col className="imgCard">

                            <CardImg src={images.hdurl} alt={images.title}/>
                            <CardTitle className="title">{images.title}</CardTitle>
                            <Button variant="contained" color="secondary">{images.date}</Button>
                        </Col>

                         <div>
                             <Alert>{images.copyright}</Alert>
                             <>

                                <CardSubtitle className="text-info">{images.explanation}</CardSubtitle>

                             </>


                    </div>

                     </CardBody>





                </Card>

        </div>



    )
}

