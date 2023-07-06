
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home'
import {CreateRecipe} from './pages/createRecipe'
import {SavedRecipe} from './pages/savedRecipe'
import { NotFound}  from './pages/notFound'

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-recipe" element={<CreateRecipe/>}/>
          <Route path="/saved-recipe" element={<SavedRecipe/>}/>
          <Route path="/*"  element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
