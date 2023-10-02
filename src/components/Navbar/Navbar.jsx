import React, { useContext,useState,useEffect } from "react";
import "./Navbar.scss";
import ProfileImage from "../../assets/images.jpg";
import { Badge, IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBarContext from "../../context/SidebarContext";
import {
  IconBell,
  IconMessage2,
  IconMoon,
  IconSearch,
} from "@tabler/icons-react";


function Navbar() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const notificationsLabel = (count) => {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  };

  const status = useContext(SideBarContext);
  const handleOnClick = () => {
    status.toggle();
  };

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }



  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
      if (getCurrentDimension().width < 1000) {
        status.setSidebarOpen(false)
      } else {
        status.setSidebarOpen(true)
      }
      
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-leftsection">
          <Tooltip title="Collapse">
            <IconButton onClick={handleOnClick}>
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <div className="search-box">
            <IconSearch className="search-iconn" size={28} />
            <span>Search..</span>
            <div>Ctrl+K</div>
          </div>
        </div>
        <div className="navbar-rightsection">
          <div className="rounded-bg">
            <Tooltip title="Night Mode">
              <IconButton>
                <IconMoon size={22} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="rounded-bg">
            <Tooltip title="Message">
              <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={1} color="success">
                  <IconBell size={22} />
                </Badge>
              </IconButton>
            </Tooltip>
          </div>
          <div className="rounded-bg">
            <Tooltip title="Message">
              <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={9} color="primary">
                  <IconMessage2 size={22} />
                </Badge>
              </IconButton>
            </Tooltip>
          </div>
          <Tooltip title="Account">
            <IconButton>
              <img src={ProfileImage} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
