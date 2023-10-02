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
import AddStudent from "./pages/Users/AddStudent";
import ViewStudents from "./pages/Users/ViewStudents";



function App() {
  const routeItems = routesConfig.map(({ to, Component, isHeader,childrens }) => {
    if (!isHeader) {
      return <Route key={to} path={to} element={<Component />} />;
    }
    return "";
  });

  const [isActive, setIsActive] = useState(true);
  const toggle = () => {
    setIsActive(!isActive);
  };

  const setSidebarOpen = (status) => {
    setIsActive(status);
  }

  


  return (
    <SideBarContext.Provider value={{ isActive, toggle,setSidebarOpen }}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute><DashboardLayout/></PrivateRoute>}>
              {routeItems}
              <Route path="/add-students" element={<AddStudent/>}/>
            <Route path="/view-students" element={<ViewStudents />} />
            <Route path="/view-faculties" element={<ViewStudents />} />
            <Route path="/add-faculty" element={<ViewStudents />} />
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
