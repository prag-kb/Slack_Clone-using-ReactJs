import React from "react";
import "../Styles/Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from '@mui/icons-material/Create';

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>FrontEndDev</h2>
          <h3>
            <FiberManualRecordIcon />
            Pragadeesh K
          </h3>
        </div>
        <CreateIcon/>
        <SidebarOption />
      </div>
    </div>
  );
}

export default sidebar;
