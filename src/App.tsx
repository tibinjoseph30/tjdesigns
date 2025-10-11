import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './custom.css';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
