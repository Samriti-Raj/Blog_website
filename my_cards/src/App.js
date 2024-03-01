
import Navbar1 from './components/Navbar1.js'
import Cards from './components/Cards/Cards.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Services from './components/Services.js';
import About from './components/About.js';
import Blogs from './components/Blogs.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Cards/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
