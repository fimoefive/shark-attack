import React from 'react';
import PropTypes from 'prop-types';
import SingleStudent from './SingleStudent';

function StudentList({ studentArray, color = 'danger' }) {
  return (
    <ul>
      {
        studentArray.map((studentObj) => (
          <SingleStudent
            color={color}
            key={studentObj.id}
            student={studentObj} />
        ))}
    </ul>
  );
}

StudentList.propTypes = {
  studentArray: PropTypes.array.isRequired,
  color: PropTypes.string,
};

export default StudentList;
