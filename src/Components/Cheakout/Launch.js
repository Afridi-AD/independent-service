import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

const Launch = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div >
            <Button variant="primary" onClick={handleShow}>
          Click to see available doctors..
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Available doctors</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='text-danger'>
            Dr. Tanisha (Heart Specialist)
            M.B.B.S - Dhaka medical collage.
            F.P.S - London medical collage.
          </Offcanvas.Body>
        </Offcanvas>
        </div>
    );
};

export default Launch;