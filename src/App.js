import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useTelegram } from '.hooks/useTelegtam';
import Header from './components/Header/Header';


function App() {
  const {onToggleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
    }, []) 
    

  return (

    <div className="App">
      <Header />
     <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
