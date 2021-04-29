import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function LiveStudent({ firstName, lastName }) {
  <div>
    <Card className="student-card">
      <CardBody>
        <CardTitle tag="h4">${firstName} {lastName}</CardTitle>
        <CardSubtitle tag="h5" className="mb-2 text-muted">Student of Sharks</CardSubtitle>
      </CardBody>
    </Card>
  </div>;
}

LiveStudent.prototypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default LiveStudent;
