import { Home, About, Menu, Reservations, Orders, Identification  } from "./pages/Pages";
import { Routes , Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/Menu" element={ <Menu /> } />
        <Route path="/Reservations" element={ <Reservations /> } />
        <Route path="/Orders" element={ <Orders /> } />
        <Route path="/Identification" element={ <Identification /> } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
