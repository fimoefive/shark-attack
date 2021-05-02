import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

function Graveyard({ deadStudents }) {
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

Graveyard.propTypes = {
  deadStudents: PropTypes.array
};

export default Graveyard;
