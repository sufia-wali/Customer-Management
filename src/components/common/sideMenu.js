import React from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import ListAltIcon from "@mui/icons-material/ListAlt";

function SideMenu() {
  return (
    <div className="sidemenu-area">
      <PermIdentityOutlinedIcon
        style={{ display: "block", margin: "2.4rem 1rem ", fontSize: "2rem" }}
      />
      <PermIdentityOutlinedIcon
        style={{ display: "block", margin: "2.4rem 1rem ", fontSize: "2rem" }}
      />
      <PermIdentityOutlinedIcon
        style={{ display: "block", margin: "2.4rem 1rem ", fontSize: "2rem" }}
      />
      <TuneIcon
        style={{ display: "block", margin: "2.4rem 1rem ", fontSize: "2rem" }}
      />
      <ListAltIcon
        style={{ display: "block", margin: "2.4rem 1rem ", fontSize: "2rem" }}
      />
    </div>
  );
}

export default SideMenu;
