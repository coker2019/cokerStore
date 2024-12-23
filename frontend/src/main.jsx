import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Route, RouterProvider, createRoutesFromElements} from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store from "./redux/store.js"


//Auth
import Login from "./pages/Auth/Login.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Login/>}  />
  </Route>)
);

ReactDom.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
    <RouterProvider router={router}  />
    </Provider>
);