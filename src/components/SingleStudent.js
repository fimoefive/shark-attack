import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';

function SingleStudent({ student, color }) {
  return (
    <Card>
      <CardBody color={color}>
        <CardTitle tag="h5">
          {student.firstName} {student.lastName}
        </CardTitle>
      </CardBody>
    </Card>
  );
}

SingleStudent.propTypes = {
  student: PropTypes.object.isRequired,
  color: PropTypes.string
};

export default SingleStudent;
