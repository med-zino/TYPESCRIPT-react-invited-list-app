
import React, { useState } from 'react';
import './App.css';
import AddToList from './components/addToList';
import List from './components/list';


export interface IState {
  people : {
    name:string,
    age:number,
    url:string,
    note?:string,
}[]
  }


function App() {

  const [people ,setPeople] = useState<IState['people']>([
    {
      name:'lebron',
      age:22,
      url:'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      note:'he ricks'
    }
  ])

  return (
    <div className="App">
     <h1>people invited to my party</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
