import { Button, Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import React from 'react'

function ModalPopup(props) {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
                                <h5>{props.title}</h5>
                                <p>{props.body}</p>
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
export default ModalPopup;