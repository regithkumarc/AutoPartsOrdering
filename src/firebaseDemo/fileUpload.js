import React, { useState, useEffect } from 'react'
import {storage} from '../config/fire'

const FileUpload = () => {

    const[image,setImage] = useState(null);
    const[imageArr,setImageArr] = useState(null)
    console.log(image);
      
    const onChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    useEffect (() => {
        fetchImageFromFirebase();
    })

    const uploadFile = () => {
        console.log("upload file",image)
        console.log("storage",storage)
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log("Upload Error",error);
            },
            () => {
                // storage
                //     .ref("images")
                //     .child(image.name)
                //     .getDownloadURL()
                //     .then(url => {
                //         console.log("Url",url)
                //     })
                fetchImageFromFirebase();
                
            }
        )
    }

    const fetchImageFromFirebase = () => {
        storage
        .ref()
        .child("images/")
        .listAll()
        .then(function(result) {
            console.log("Url",result.items)
            var imageArray = [];
            result.items.forEach(function(imageRef) {
                imageRef.getDownloadURL().then(function(url) {
                    console.log("url : " ,url);
                    imageArray.push(JSON.stringify(url))
                    //setImageArr(JSON.stringify(url));
                    console.log("imageArr 2",imageArray)
                })
            });
            
            setImageArr(imageArray);
            console.log("imageArr 3",imageArr)
        })
    }

    // function displayImage(row,images){
    //     console.log("display iamge",images)
    //     images.getDownloadURL().then(function(url) {
    //         console.log("url : " ,url);
    //         //console.log("Json 2 :",JSON.stringify(url))
    //         //console.log("Json 1 :",JSON.parse(JSON.stringify(url)))
    //         setImageArr(JSON.stringify(url));
    //         console.log("imageArr 2",imageArr)
    //     })
    // }

    return(
        <div>
            <input type="file" onChange = {onChange}></input>
            <button onClick = {uploadFile}>File Upload</button>
        </div>
    )
}
export default FileUpload;