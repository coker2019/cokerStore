import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// private Route
import PrivateRoute from "./components/PrivateRoute.jsx";

//Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register.jsx";

import Profile from "./pages/User/Profile.jsx";
import UserList from "./pages/Admin/UserList";
import  CategoryList from "./pages/Admin/CategoryList.jsx"

import AdminRoute from "./pages/Admin/AdminRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

    {/* Admin Route  */}
    <Route path="/admin" element={<AdminRoute />}>
    <Route path="userlist" element={<UserList />} />
    <Route path="categorylist" element={< CategoryList />} />

      </Route>


    </Route>
  )
);

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
