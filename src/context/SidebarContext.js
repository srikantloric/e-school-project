import { createContext } from "react";

const SideBarContext = createContext({ isActive: null, toggle: () => { } })
export default SideBarContext;