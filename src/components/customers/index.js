import React from "react";
import Header from "../common/header.js";
import Container from "./container.js";
import SideMenu from "../common/sideMenu.js";
import Table from "./table";

function Customer() {
  return (
    <div className="tablemain">
      <div className="table-sidemenu">
        <SideMenu />
      </div>
      <div className="table-data-area">
        <div>
          <Header />
          <Container />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default Customer;
