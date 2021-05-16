import React, { useState } from 'react';
import { Button } from 'reactstrap';
import {
  livingStudents,
  followTheLight,
  reset
} from '../helpers/data/studentsData';
import StudentList from '../components/StudentList';
import './App.scss';

function App() {
  const [liveStudents, setLiveStudents] = useState(livingStudents());
  const [deadStudents, setDeadStudents] = useState([]);

  // useEffect(() => {
  //   setLiveStudents(livingStudents());
  //   setDeadStudents(dearlyBeloved());
  // }, []);

  const attackButton = (cb) => {
    const [live, dead] = cb();
    setLiveStudents(live);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      <h1>SHARK ATTACK</h1>
      <br />

      <Button color="danger" onClick={() => attackButton(followTheLight)} disabled={liveStudents.length ? '' : 'disabled'}>{liveStudents.length ? 'Shark Attack' : 'ALL DEAD'}</Button>

      {/* <Button color="danger" onClick={() => attackButton(followTheLight)}
        disabled={liveStudents.length <= 0}
      >Shark Bite</Button> */}

      {/* <Button onClick{...() => attackButton(reset)}>RESET</Button> */}
      <Button color="info" onClick={() => attackButton(reset)}>RESET</Button>
      <br />

      <h3>Shark Tank</h3>
      {/* {liveStudents.map((student) => student.firstName)} */}
      <StudentList color='info' studentArray={liveStudents} />

      <h3>Graveyard</h3>
      {/* {deadStudents.map((student) => student.firstName)} */}
      <StudentList color='secondary' studentArray={deadStudents} />
    </div>
  );
}

export default App;
