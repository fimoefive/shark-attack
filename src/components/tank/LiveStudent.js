import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const LiveStudent = ({ student }) => (
  <div>
    <Card className="student-card">
      <CardBody>
        <CardTitle tag="h4">{student.firstName} {student.lastName}</CardTitle>
        <CardSubtitle tag="h5" className="mb-2 text-muted">Student of Sharks</CardSubtitle>
      </CardBody>
    </Card>
  </div>);

LiveStudent.propTypes = {
  student: PropTypes.object.isRequired
};

export default LiveStudent;
