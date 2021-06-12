import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PasteTicket from './components/PasteTicket';

function App() {
  const [pastes, setPastes] = useState([]);
  const getPastes = async () => {
    const { data } = await axios.get('/paste/get');
    console.log(data);
    setPastes(data);
  };

  useEffect(() => {
    getPastes()
  }, [])

  return (
    <div className="App">
      <div className = 'pastesCounter'>{pastes.length} Pastes Found:</div>
      <div className = 'pastesContainer'>
          {pastes && pastes.map((paste, index) => (
              <PasteTicket ticket = {paste} />
          ))}
    </div>
    </div>
  );
}

export default App;
