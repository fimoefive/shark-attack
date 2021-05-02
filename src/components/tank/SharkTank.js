import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import LiveStudent from './LiveStudent';

function SharkTank({ liveStudents }) {
  return (
    <div className="tank-container">
      <Button color="danger">Shark Attack</Button>
      {
        liveStudents.map((studentObj) => <LiveStudent
          key={studentObj.id} firstName={studentObj.firstName}
          lastName={studentObj.lastName} />)
      }
    </div>
  );
}

SharkTank.propTypes = {
  liveStudents: PropTypes.array
};

export default SharkTank;
