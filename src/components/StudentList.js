import React from 'react';
import PropTypes from 'prop-types';
import SingleStudent from './SingleStudent';

function StudentList({ studentArray, color = 'danger' }) {
  return (
    <div>
      {
        studentArray.map((studentObj) => (
          <SingleStudent
            color={color}
            key={studentObj.id}
            student={studentObj} />
        ))}
    </div>
  );
}

StudentList.propTypes = {
  studentArray: PropTypes.array.isRequired,
  color: PropTypes.string,
};

export default StudentList;
