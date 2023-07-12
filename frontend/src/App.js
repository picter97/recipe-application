
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home } from './pages/home';
import {CreateRecipe } from './pages/createRecipe';
import {SavedRecipe } from './pages/savedRecipe';
import { NotFound }  from './pages/notFound';
import { Navbar } from './components/Navbar';
import { Auth } from './pages/auth';

function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-recipe" element={<CreateRecipe/>}/>
          <Route path= "/auth" element={<Auth/>}/>
          <Route path="/saved-recipe" element={<SavedRecipe/>}/>
          <Route path="/*"  element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
