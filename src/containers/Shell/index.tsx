import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { appRoutes, ROUTES_ENUM } from "constants/routes";
import ShellStyles from "./shell.module.scss";
import Home from "containers/New home";
import Students from "containers/Benefits/students";
const Login = React.lazy(() => import("containers/Login"));

const Shell: React.FC = () => {
  return (
    <div className={ShellStyles["shell"]}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path={appRoutes[ROUTES_ENUM.LOGIN]} element={<Login />} />
            <Route path={appRoutes[ROUTES_ENUM.HOME]} element={<Home />} />
            <Route path={appRoutes[ROUTES_ENUM.STUDENTS]} element={<Students />} />
            <Route path="/" element={<Navigate to={appRoutes[ROUTES_ENUM.HOME]} replace />} />
            <Route path="*" element={<Navigate to={appRoutes[ROUTES_ENUM.LOGIN]} replace />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
};

export default React.memo(Shell);
