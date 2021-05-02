import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

const SharkTank = ({ allStudents }) => (
  <div>
    {
      allStudents.map((student) => (
        <LiveStudent
          key={student.id} student={student} />
      ))}
  </div>
);

SharkTank.propTypes = {
  allStudents: PropTypes.array.isRequired
};

export default SharkTank;
