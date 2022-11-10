import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from './components/layout/SideNav';
import TopNav from './components/layout/TopNav';
import Analytics from './components/Analytics';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='Nav'>
        <SideNav />
        <TopNav />
        </div>
    </div>
          <Routes>
          <Route exact path="/" element={<Analytics />} />
          </Routes>
     
    </BrowserRouter>
  );
}

export default App;
