import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../views/HomePage';
import DetailsPage from '../views/DetailsPage';
import NotFoundPage from '../views/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import Login  from '../views/Login';


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/details" element={<DetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;



