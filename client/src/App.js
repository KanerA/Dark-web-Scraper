import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PasteTicket from './components/PasteTicket';

function App() {
  const [pastes, setPastes] = useState([]);
  const [pastesBackup, setPastesBackup] = useState([]);
  const getPastes = async () => {
    const { data } = await axios.get('/paste/get');
    setPastes(data);
    setPastesBackup(data); // only place to use setPastesBackup !!!
  };

  const handleSearch = (searchWord) => {
    if(!searchWord) return setPastes(pastesBackup);
    const searchResults = pastesBackup.filter(paste => {
      if(paste.title.toLowerCase().includes(searchWord)) return true;
      if(paste.author.toLowerCase().includes(searchWord)) return true;
      for(let str of paste.content){
        if(str.toLowerCase().includes(searchWord)) return true;
      }
      return null;
    });
    setPastes(searchResults);
  };

  const hideOnClick = async (e) => {
    try {
     const date = e.target.parentElement.children[3].innerText;
     const ticketIndex = pastes.findIndex(
      (ticket) => ticket.date === date
     );
     const tempList = [...pastes];
     tempList[ticketIndex].hidden = true;
     setPastes(tempList);
    } catch (e) {
     console.log("ERROR" + e);
    }
   };

  useEffect(() => {
    getPastes()
  }, [])

  const notHiddenPastes = pastes.filter(paste => !(paste.hidden));
  return (
    <div className="App">
      <div className = 'omniSearch'>
        <input type = 'text' onChange = {evt => handleSearch(evt.target.value)} placeholder = 'Search for Pastes' />
      </div>
      <div className = 'pastesCounter'>{pastes.filter(paste => !paste.hidden).length} Pastes Found:</div>
      <div className = 'pastesContainer'>
          {notHiddenPastes && notHiddenPastes.map((paste, index) => (
              <PasteTicket ticket = {paste} hideOnClick = {hideOnClick} />
          ))}
    </div>
    </div>
  );
}

export default App;
