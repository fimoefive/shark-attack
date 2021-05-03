import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

function GraveYard({ deadStudents }) {
  return (
    <div className="grave-container">
      {
        deadStudents.map((studentObj) => (
          <GraveStone
            key={studentObj.id} studentObj={studentObj} />
        ))}
    </div>
  );
}

GraveYard.propTypes = {
  deadStudents: PropTypes.array.isRequired
};

export default GraveYard;
