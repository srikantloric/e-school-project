import { useContext } from "react";
import SideBarContext from "../../context/SidebarContext";

function PageContainer({ children }) {
  const status = useContext(SideBarContext);
  return (
    <div  className={status.isActive?"page-container sidemenu-tracker":"page-container "}>
      {children}</div>
  )
}

export default PageContainer