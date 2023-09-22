import { IconChevronDown, IconPoint } from "@tabler/icons-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SIdebarMenuItem({ menus }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavLink to={menus.to} className={open ? "menu-items open-mainmenu":"menu-items close-mainmenu"}>
        <div className="icon-plus-title">
          <menus.icon fontSize="small" />
          <p>{menus.title}</p>
        </div>
        <div className="dropdown">
          {menus.childrens ? <IconChevronDown className="toggle-btn" onClick={()=>setOpen(!open)} size={20}/> : ""}
        </div>
      </NavLink>
      <div className={open ? "sub-menu open-submenu" : "sub-menu close-submenu"}>
        {menus.childrens &&
          menus.childrens.map((item) => {
            return (
              <NavLink to={item.to} className={`menu-items-submenu`}>
                <div className="icon-plus-title">
                  <IconPoint className="icon-menu" fontSize="small" />
                  <p>{item.title}</p>
                </div>
              </NavLink>
            );
          })}
      </div>
    </>
  );
}

export default SIdebarMenuItem;
