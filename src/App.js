import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Create' element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
