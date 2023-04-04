import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotAvailable from './NotAvailable';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='/*' element={<NotAvailable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
