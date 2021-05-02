import React, { useState } from 'react';
import { liveStudents, dearlyBeloved } from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const [allStudents, setAllStudents] = useState(students);

  return (
    <div className='App'>
      <h1>SHARK ATTACK</h1>
      <br />

      <h3>Shark Tank</h3>
      <button onClick={ }>Shark Attack</button>
      <h3>Graveyard</h3>
    </div>
  );
}

export default App;
