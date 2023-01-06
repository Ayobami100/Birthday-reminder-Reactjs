import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [People, setPeople] = useState(data)
  return (
  <main>
    <section className='container'>
    <h3>{data.length} birthdays today</h3>

    <List people = {People}/>

    <button onClick={() => setPeople([])}>Clear All</button>
    </section>
        </main>);
}

export default App;
