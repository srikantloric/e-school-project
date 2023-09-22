import React, { useContext } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { routesConfig } from "../Utils/RoutesConfig";
import SideBarContext from "../../context/SidebarContext";
import { motion } from "framer-motion";
import { IconChevronDown, IconChevronUp, IconPoint } from "@tabler/icons-react";
import SIdebarMenuItem from "./SIdebarMenuItem";

function Sidebar() {
  const status = useContext(SideBarContext);

  return (
    <motion.div
      animate={{ width: "260px" }}
      className={
        status.isActive ? "sidebar-container" : "sidebar-container hidden"
      }
    >
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src="https://demos.adminmart.com/premium/react/modernize-react/docs/dist/images/logo-dark.svg" />
        </div>
        <div className="sidebar-menu">
          {routesConfig.map((menus) => {
            if (menus.isHeader) {
              return <p>{menus.title}</p>;
            } else {
              return (
                <>
                
                  <SIdebarMenuItem menus={menus} />
                  {/* <NavLink to={menus.to} className={`menu-items`}>
                    <div className="icon-plus-title">
                      <menus.icon fontSize="small" />
                      <p>{menus.title}</p>
                    </div>
                    <div className="dropdown">
                      {menus.childrens ? <IconChevronDown className="toggle-btn"/> : ""}
                    </div>
                  </NavLink>
                  <div className="sub-menu">
                    {menus.childrens &&
                      menus.childrens.map((item) => {
                        return (
                          <NavLink to={item.to} className={`menu-items`}>
                            <div className="icon-plus-title">
                              <IconPoint
                                className="icon-menu"
                                fontSize="small"
                              />
                              <p>{item.title}</p>
                            </div>
                          </NavLink>
                        );
                      })}
                  </div> */}
                </>
              );
            }
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
