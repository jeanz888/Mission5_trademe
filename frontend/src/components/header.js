import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

/**
 * Header component
 * @returns {JSX.Element} The Header component with navigation links
 */
const Header = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* App name/title */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        {/* Conditional rendering based on user authentication status */}
        {user ? (
          <>
            {/* Display username */}
            <Typography variant="body1">
              {user.username}
            </Typography>
            {/* Logout button */}
            <Button color="inherit" onClick={logout} style={{ marginLeft: '10px' }}>
              Logout
            </Button>
          </>
        ) : (
          <>
            {/* Login button */}
            <Button color="inherit" component={Link} to="/login" style={{ marginLeft: 'auto' }}>
              Login
            </Button>
            {/* Register button */}
            <Button color="inherit" component={Link} to="/register" style={{ marginLeft: '10px' }}>
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;