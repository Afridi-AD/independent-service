import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';


const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Cardiology</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> service and hospitality. It's very engaging.
        So effective ......
      </Popover.Body>
    </Popover>
  );

const Review = () => {
    return (
        <OverlayTrigger  trigger="click" placement="right" overlay={popover}>
        <Button className='ms-5 mb-5 mt-5 justify-content-center text-white' variant="success">Click me to see Last patient review .....</Button>
      </OverlayTrigger>
    );
};

export default Review;