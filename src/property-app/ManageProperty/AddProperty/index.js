import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ModalInfo from './ModalInfo';

const AddProperty = (props) => {

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        props.showButton();   
    }
    const handleShow = () => setShow(true);

    const modalInformation = [
        {
            "id":123,
            "infoName":"Property Name",
            "type":"text" 
        },
        {
            "id":124,
            "infoName":"Location",
            "type":"text" 
        },
        {
            "id":125,
            "infoName":"Per Night Fee",
            "type":"number" 
        },
        {
            "id":126,
            "infoName":"cleaning Fee per stay",
            "type":"number" 
        },
        {
            "id":127,
            "infoName":"Service Fee per stay",
            "type":"number" 
        }

    ];



    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Register your property</Modal.Title>
            </Modal.Header>
        <form>
            <Modal.Body>
                <div className='wd-add-property-container'>
                    {/* {
                        modalInformation.map(info=> <ModalInfo key={info.id} info={info}></ModalInfo>)
                    } */}
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Property Name</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                     </div>

                     <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Address line 1</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                     </div>

                     <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Property Name</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                     </div>

                     <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Property Name</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                     </div>

                     <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Property Name</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                     </div>
                     <input type="file" class="form-control" id="customFile" />
                     <input type="file" class="form-control" id="customFile" />
                     <input type="file" class="form-control" id="customFile" />


                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary"  type="submit">Save changes</Button>
            </Modal.Footer>
        </form>
        </Modal>
        
    );
}

export default AddProperty;