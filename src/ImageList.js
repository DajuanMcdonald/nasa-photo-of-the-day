import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ImageList() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=CWMpwYsCugMG5FPhzRMRaWklHLe3WzYhMQlklR2s')
            .then( res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])
}