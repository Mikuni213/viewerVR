import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import About from './routes/about';
// import Contact from './routes/contact';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;