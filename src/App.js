import {Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import { routesConfig } from "./components/Utils/RoutesConfig";
import { useState } from "react";
import SideBarContext from "./context/SidebarContext";

//Layouts
import AuthenticationLayout from "./layouts/AuthenticationLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./utilities/PrivateRoute";



function App() {
  const routeItems = routesConfig.map(({ to, Component, isHeader }) => {
    if (!isHeader) {
      return <Route path={to} element={<Component />} />;
    }
    return "";
  });

  const [isActive, setIsActive] = useState(true);
  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <SideBarContext.Provider value={{ isActive, toggle }}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute/>}>
          <Route path="/" element={<DashboardLayout />}>
            {routeItems} 
        </Route>
          </Route>
       
           <Route path="/login" element={<AuthenticationLayout/>}>
              <Route index element={<Login />} />
           </Route>

        </Routes>
      </AuthProvider>
       
    </SideBarContext.Provider>
  );
}

export default App;
