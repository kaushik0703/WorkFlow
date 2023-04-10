import Designer from './components/Designer';
import SmoothScroll from './components/SmoothScroll';
import Home from './components/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
    <Router>
      <SmoothScroll>
        <div className="h-screen">
        <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/workflow/:name" element={<Designer/>} />
        </Routes>
        </div>
      </SmoothScroll>
    </Router>
    </>
  );
}

export default App;