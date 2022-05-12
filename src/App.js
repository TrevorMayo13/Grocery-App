import logo from './logo.svg';
import Nav from './components/Nav.js'
import {useState} from 'react'
import './App.css';

function App() {
  const [view,setview] = useState("Home")

  const handleNavChange = (id) => {
    console.log(id)
  };

  return (
    <div className="App">
      <Nav handleNavChange={handleNavChange} />
    </div>
  );
}

export default App;
