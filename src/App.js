
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Member from './componetns/Member';
import NavBar from './componetns/NavBar';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<NavBar/>}/>
        <Route exact path="/member" element={<Member/>}/>
      </Routes>
      
         
    </div>
  );
}

export default App;
