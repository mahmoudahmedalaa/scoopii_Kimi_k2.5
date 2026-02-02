
import './App.css';

function App() {
  return (
import { LandingPage } from '@/pages/LandingPage';
  import { Admin } from '@/pages/Admin';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    );
    export default App;
