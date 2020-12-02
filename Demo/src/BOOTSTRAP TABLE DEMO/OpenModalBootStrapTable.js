import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const OpenModalBootStrapTable = () => {

    const [players, setplayers] = useState([])
    const [modalInfo, setModalInfo] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [show, setshow] = useState(false)
    const handleClose = () => setshow(false)
    const handleShow = () => setshow(true)

    const getPlayerData = async () => {
        try {
            const data = await axios.get('https://nba-players.herokuapp.com/players-stats');
            console.log(data);
            setplayers(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPlayerData();
    }, [])

    const columns = [
        {
            dataField: 'name',
            text: 'Player Name'
        }, {
            dataField: 'points_per_game',
            text: 'Points Per Game'
        }, {
            dataField: 'team_name',
            text: 'Player team'
        }
    ]
    const rowEvents = {
        onClick: (e, row) => {
            console.log(row);
            setModalInfo(row)
            toggleTrueFalse()
        }
    }

    const toggleTrueFalse = () => {
        setShowModal(handleShow);
    }
    const ModalContent = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalInfo.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Modal</h1>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        )
    }
    return (
        <div>
            <div className="container" style={{ marginTop: 50 }}>
                <BootstrapTable
                    striped
                    hover
                    keyField='name'
                    data={players}
                    columns={columns}
                    pagination={paginationFactory()}
                    rowEvents={rowEvents}
                />
                {
                    show ? <ModalContent /> : null
                }
            </div>
        </div>
    )
}

export default OpenModalBootStrapTable;



// ********************************************************************************************************************************//
// import React, { useState } from "react";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
// import FormikForm from './FormikForm';

// function OpenModalBootStrapTable() {
//     const [modalOpen, setModalOpen] = useState(false);
//     return (
//         <>
//             <Button
//                 color="primary"
//                 type="button"
//                 onClick={() => setModalOpen(!modalOpen)}
//             >
//                 Launch demo modal
//       </Button>
//             <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
//                 <div className=" modal-header">
//                     <h5 className=" modal-title" id="exampleModalLabel">
//                         Modal title
//           </h5>
//                     <button
//                         aria-label="Close"
//                         className=" close"
//                         type="button"
//                         onClick={() => setModalOpen(!modalOpen)}
//                     >
//                         <span aria-hidden={true}>×</span>
//                     </button>
//                 </div>
//                 <ModalBody><FormikForm/></ModalBody>
//                 <ModalFooter>
//                     <Button
//                         color="secondary"
//                         type="button"
//                         onClick={() => setModalOpen(!modalOpen)}
//                     >
//                         Close
//           </Button>
//                     <Button color="primary" type="button">
//                         Save changes
//           </Button>
//                 </ModalFooter>
//             </Modal>
//         </>
//     );
// }

// export default OpenModalBootStrapTable;







// //********************************************************************************************************************************************//
// import React,{useState} from 'react';
// import { Modal, Button } from "react-bootstrap";

// const OpenModalBootStrapTable = () => {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }

// export default OpenModalBootStrapTable

