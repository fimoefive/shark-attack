import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function GraveStone({ studentObj }) {
  return (
    <div>
      <Card className="student-card">
        <CardBody>
          <CardTitle tag="h4">{studentObj.firstName} {studentObj.lastName}</CardTitle>
          <CardSubtitle tag="h5">Tomb Stone</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

GraveStone.propTypes = {
  studentObj: PropTypes.object.isRequired
};

export default GraveStone;
