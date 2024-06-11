import './App.css';
import Home from './screens/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portpage from './screens/Portpage';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/Portfolio' element={<Portpage/>}/>
            </Routes>
          </BrowserRouter> 
    </div>
  );
}

export default App;
