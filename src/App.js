import './App.css';
import List from './List';
import { data } from './data';
import {  useState } from 'react';

function App() {
  const [person, setPerson] = useState(data);
  const clearList= () =>{
   setPerson([])
  }
  return (
    <div className='main'>
      <h2>{person.length} Birthdays today</h2>
      <List list_data={person}/>
      <button onClick={clearList}>Clear all</button>
    </div>
  );
}

export default App;
