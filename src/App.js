import './App.css';
import Login  from "./Components/Login/Login";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Quiz from './Components/Quiz/Quiz';

function App() {
  return (
    <>
    <Router>
      <div className='Components'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;