import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

function GraveYard({ deadStudents }) {
  return (
    <div className="grave-container">
      {
        deadStudents.map((studentObj) => (
          <GraveStone
            key={studentObj.id} firstName={studentObj.firstName} lastName={studentObj.lastName} />
        ))}
    </div>
  );
}

GraveYard.propTypes = {
  deadStudents: PropTypes.array
};

export default GraveYard;
