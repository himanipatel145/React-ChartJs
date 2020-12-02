import React, { useState } from 'react';
import Modal from 'react-modal';


function Modall() {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => { setmodalIsOpen(true) }}> Open modal </button>

            <Modal isOpen={modalIsOpen}

            onRequestClose={()=>{setmodalIsOpen(false)}} 
            // we can close modal by clicking anywhere on the screen

            // shouldCloseOnOverlayClick = {false}
            // we can not able to close by clicking anywhere
            >

                <h1>Modal title</h1>
                <p>Modal Body</p>
                {/* <div>
                    <button onClick={()=>{setmodalIsOpen(false)}}> close </button>
                </div> */}
            </Modal>
            
        </>
    )
}

export default Modall;

