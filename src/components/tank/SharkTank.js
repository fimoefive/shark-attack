import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

function SharkTank({ liveStudents }) {
  return (
    <div className="tank-container">
      {
        liveStudents.map((studentObj) => (
          <LiveStudent
            key={studentObj.id} firstName={studentObj.firstName}
            lastName={studentObj.lastName} />
        ))}
    </div>
  );
}

SharkTank.propTypes = {
  liveStudents: PropTypes.array
};

export default SharkTank;
