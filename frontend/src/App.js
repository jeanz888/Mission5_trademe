import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@material-ui/core';
import Header from './components/Header'; // Header component
import Home from './pages/Home'; // Home page component
import Login from './pages/Login'; // Login page component
import Register from './pages/Register'; // Register page component
import BidForm from './components/BidForm'; // BidForm component
import BidList from './components/BidList'; // BidList component
import ItemComparison from './components/ItemComparison'; // ItemComparison component
import CategoryList from './components/CategoryList'; // CategoryList component
import ItemDetails from './components/ItemDetails'; // ItemDetails page component
import { AuthProvider } from './contexts/AuthContext'; // AuthProvider context
import './App.css'; // CSS file for global styles

// Create a Material-UI theme instance
const theme = createTheme();

/**
 * Main application component
 * @returns {JSX.Element} The App component
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Wrap the application with AuthProvider to provide authentication context */}
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/items/:id" element={<ItemDetails />} />
            <Route path="/bid-form" element={<BidForm />} />
            <Route path="/bid-list" element={<BidList />} />
            <Route path="/item-comparison" element={<ItemComparison />} />
            <Route path="/categories" element={<CategoryList />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;