import { Button, Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import React, { useState } from 'react'
import { storage } from "../../config/fire";

function FileUploadPopup(props) {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const[image,setImage] = useState(null);
    console.log(image);
      
    const onChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const uploadFile = () => {
        console.log("upload file",props.image)
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
            
        })
    }

    return (
        <div>
            <Modal isOpen={props.show} fade={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>
                    Details
                    </ModalHeader>
                <ModalBody>
                    <table>
                        <tr>
                            {/* <td>
                                <img width="120" src={props.imageURL} alt=""/>
                            </td> */}
                            <td>
                                <input type = "file" onChange = {onChange}></input>
                                <button onClick = {uploadFile}>File Upload</button>
                            </td>
                        </tr>
                    </table>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={props.toggle}>
                        Done
                        </Button>
                    <Button onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default FileUploadPopup;