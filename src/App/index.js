import React, { useState } from 'react';
import { Button } from 'reactstrap';
import GraveYard from '../components/grave/Graveyard';
import SharkTank from '../components/tank/SharkTank';
import {
  followTheLight
} from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const [allStudents, setAllStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

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

      <h3>Shark Tank</h3>
      <SharkTank allStudents={allStudents} />

      <h3>Graveyard</h3>
      <GraveYard deadStudents={deadStudents} />
    </div>
  );
}

export default App;
