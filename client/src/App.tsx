import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import DashboardPage from './pages/DashboardPage';
import PartnersPage from './pages/PartnersPage';
import OrdersPage from './pages/OrdersPage';
import AssignmentsPage from './pages/AssignmentsPage';

const App: React.FC = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Delivery Management
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/partners">
          Partners
        </Button>
        <Button color="inherit" component={Link} to="/orders">
          Orders
        </Button>
        <Button color="inherit" component={Link} to="/assignments">
          Assignments
        </Button>
      </Toolbar>
    </AppBar>
    <Box sx={{ py: 3 }}>
      <Container>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
        </Routes>
      </Container>
    </Box>
  </Router>
);

export default App;
