import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import {
  livingStudents,
  dearlyBeloved,
  followTheLight,
  reset
} from '../helpers/data/studentsData';
import StudentList from '../components/StudentList';
import './App.scss';

function App() {
  const [allStudents, setAllStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setAllStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);

  const attackButton = () => {
    const [live, dead] = followTheLight();
    setAllStudents(live);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      <h1>SHARK ATTACK</h1>
      <br />

      <Button color="danger" onClick={attackButton}
        disabled={allStudents.length <= 0}
      >Shark Bite</Button>
      <Button onClick{...() => attackButton(reset)}>RESET</Button>

      <h3>Shark Tank</h3>
      <StudentList color='info' studentArray={allStudents} />

      <h3>Graveyard</h3>
      <StudentList color='secondary' studentArray={deadStudents} />
    </div>
  );
}

export default App;
