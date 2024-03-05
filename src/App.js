import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegtam';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom'
import ProductList from './components/productList/productList';
import cart from './components/cart/cart';

function App() {
  return ( <div>ааа</div> )
  
/*  const {onToggleButton} = useTelegram();
 useEffect( () => {
    tg.ready();
    }, []) 
    

  return (

    <div className="App">
      <Header />
      <Routes>
	<Route index element={<ProductList  />} /> 
  <Route path={'Cart'} element={<cart />} />
</Routes>
    </div>
  ); */
  }



export default App;
