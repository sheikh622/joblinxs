import React from "react";
import List from "@mui/material/List";

import routesConfig, {
  RouterConfigData,
} from "../../../../../routes/navbarConfig";
import NavVerticalGroup from "./VerticalNavGroup";
import VerticalCollapse from "./VerticalCollapse";
import VerticalItem from "./VerticalItem";
import { useDispatch, useSelector } from "react-redux";

const permissions=[
  {
    id:"1",
    name:"User Management",
  },{
    id:"1",
    name:"Admin Management",
  },{
    id:"1",
    name:"Notification Management",
  }
  
]
const VerticalNav = () => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <List
      sx={{
        position: "relative",
        padding: 0,
      }}
      component="div"
    >
    {/* {user?.userType==="admin"?( */}
       {routesConfig.map((item: any) => (
        
       <React.Fragment key={item.id}>
         {item.type === "group" && <NavVerticalGroup item={item} level={0} />}

         {item.type === "collapse" && (
           <VerticalCollapse item={item} level={0} />
         )}

         {item.type === "item" && <VerticalItem item={item} level={0} />}
       </React.Fragment>
     
    ))}
  
    </List>
  );
};

export default VerticalNav;
