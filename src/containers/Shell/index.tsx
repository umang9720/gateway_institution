import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'; // Updated imports
import { appRoutes, ROUTES_ENUM } from 'constants/routes';
import ShellStyles from './shell.module.scss';
import Layout from 'components/Layout';
import Home from 'containers/Home'; // Fixed folder name
import EmptyLayout from 'components/EmptyLayout';

const Login = React.lazy(() => import('containers/Login'));

const Shell: React.FC = () => {
  console.log('appRoutes:', appRoutes); // Debugging appRoutes
  console.log('ROUTES_ENUM:', ROUTES_ENUM); // Debugging ROUTES_ENUM

  return (
    <div className={ShellStyles['shell']}>
      <React.Suspense fallback={<div className="loader">Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route
              path={appRoutes[ROUTES_ENUM.LOGIN]}
              element={
                <EmptyLayout>
                  <Login />
                </EmptyLayout>
              }
            />
            <Route
              path={appRoutes[ROUTES_ENUM.HOME]}
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            {/* Redirect updated using Navigate */}
            <Route
              path="/"
              element={<Navigate to={appRoutes[ROUTES_ENUM.HOME]} replace />}
            />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
};

export default React.memo(Shell);
