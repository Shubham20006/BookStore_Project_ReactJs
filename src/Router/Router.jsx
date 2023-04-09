import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import SignUp from '../Pages/SignUp/SignUp';
import Dashboard from '../Component/Dashboard/Dashboard';
import OrderSign from '../Pages/OrderSign/OrderSign';


function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route exact path={"/"} element={<AuthRoute><OrderSign /></AuthRoute>} />
          <Route path={"/signup"} element={<AuthRoute><SignUp /></AuthRoute>} />
          <Route path={"/dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default Router