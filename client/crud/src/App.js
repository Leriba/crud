import './App.css';
import { useState } from 'react';
import Axios from 'axios'

function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [position, setPosition] = useState('');
    const [country, setCountry] = useState('');
    const [wage, setWage] = useState(0);

    const info = () => {
        Axios.post("http://localhost:3002/create", {
            name: name,
            age: age,
            position: position,
            country: country,
            wage: wage
        }).then(() => {
            console.log('success');
        });
    };

  return (
      <div className="App">
          <div className='info'>
              <input type='text' placeholder='Name' onChange={(event) => { setName(event.target.value); }} />
              <input type='number' placeholder='Age' onChange={(event) => { setAge(event.target.value); }} />
              <input type='text' placeholder='Position' onChange={(event) => { setPosition(event.target.value); }} />
              <input type='text' placeholder='Country' onChange={(event) => { setCountry(event.target.value); }} />
              <input type='number' placeholder='Wage' onChange={(event) => { setWage(event.target.value); }} />
            <button>Add</button>
          </div>
     </div>
  );
}

export default App;
