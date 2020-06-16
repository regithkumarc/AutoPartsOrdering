import React, { useEffect, useState } from 'react'
import { Card, CardImg, CardTitle, CardSubtitle, Button, CardBody, CardText } from "reactstrap";
import {storage} from '../../config/fire'

const CustomCard = (props) => {
    console.log("Image Name : ",props.productImage)
    const[imageUrl,setImageUrl] = useState(null);

    useEffect(() => {
        storage
            .ref("images")
            .child(props.productImage)
            .getDownloadURL()
            .then(url => {
                console.log("Url", url)
                setImageUrl(url)
            }).catch((err) => {
                console.log("Error",err)
                // if(err.code === "404"){

                // }
            })
    })

    return (
        <div>
            <Card>
                <CardImg top width="50%" src = {imageUrl} alt="poster" />
                <CardBody>
                    <CardTitle>{props.productId}</CardTitle>
                    <CardSubtitle>{props.productName}</CardSubtitle>
                    <CardText>{props.productPrice}</CardText>
                    <Button>AddTocart</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CustomCard;