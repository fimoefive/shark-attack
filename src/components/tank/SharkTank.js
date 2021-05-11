import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

function SharkTank({ liveStudents }) {
  return (
    <div>
      {
        liveStudents.map((student) => (
          <LiveStudent
            key={student.id} student={student} />
        ))}
    </div>
  );
}

SharkTank.propTypes = {
  liveStudents: PropTypes.array.isRequired
};

export default SharkTank;
