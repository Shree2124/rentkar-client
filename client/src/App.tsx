import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import PartnersPage from './pages/PartnersPage';
import OrdersPage from './pages/OrdersPage';
import AssignmentsPage from './pages/AssignmentsPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
      </Routes>
    </>
  );
};

export default App;
