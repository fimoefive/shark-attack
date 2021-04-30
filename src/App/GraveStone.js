import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function GraveStone({ firstName, lastName }) {
  <div>
    <Card className="student-card">
      <CardBody>
        <CardTitle tag="h4">{firstName} {lastName}</CardTitle>
        <CardSubtitle tag="h5" className="mb-2 text-muted">Tomb Stone</CardSubtitle>
      </CardBody>
    </Card>
  </div>;
}

GraveStone.prototypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default GraveStone;
