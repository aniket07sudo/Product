import React from "react";
import {Modal,Button,Form} from "react-bootstrap";

const ModalComponent = ({show,handleClose}) => {

    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="inputContainer">
                    <div className="fieldLabel">Product Name</div>
                    <Form.Control type="email" style={{flex:1}} placeholder="Enter email" />
                </div>
                <div className="inputContainer">
                    <div className="fieldLabel">Vat</div>
                    <Form.Group className="mb-3">
                    <Form.Select style={{flex:1}}>
                        <option>6</option>
                        <option>10</option>
                        <option>12</option>
                    </Form.Select>
                </Form.Group>
                </div>
                <div className="inputContainer">
                    <div className="fieldLabel">Quantity</div>
                    <Form.Control type="email" style={{flex:1}} placeholder="Enter Quantity" />
                </div>
                <div className="inputContainer">
                    <div className="fieldLabel">Price (net)</div>
                    <Form.Control type="email" style={{flex:1}} placeholder="Enter price (net)" />
                </div>
                <div className="inputContainer">
                    <div className="fieldLabel">Price (gross)</div>
                    <Form.Control type="email" style={{flex:1}} placeholder="Enter Price (gross)" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Delete</Button>
                <Button variant="primary">Save</Button>
            </Modal.Footer>
</Modal.Dialog>
</Modal>
    )
}

export default ModalComponent;