import './App.css';

import AdaLovelace from './pages/AdaLovelace/AdaLovelace.tsx';
import ToDo from './pages/ToDo/ToDo.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import Calculator from './pages/Caculator.tsx/Calculator.tsx';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.tsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const navList = ['AdaLovelace', 'ToDo', 'Calculator', 'ShoppingCart'];
  return (
      <Router>
        <NavBar navList={navList} /> {/* inside router */}
        <Routes>
          <Route path="/AdaLovelace" element={<AdaLovelace />} />
          <Route path="/ToDo" element={<ToDo />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </Router>
  );
}

export default App;
