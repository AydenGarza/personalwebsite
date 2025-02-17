import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home></Home>}/>
          <Route path="/home" element = {<Home></Home>}></Route>
          <Route path="/projects" element = {<Projects></Projects>}></Route>
          <Route path="/about" element = {<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//npm run deploy => deploy to GH pages
//npm start => development server
