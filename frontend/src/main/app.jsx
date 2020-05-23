import "../common/template/dependencies";
import React from "react";

import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
//props.children entrou no lugar de ROUtES import Routes from "./routes";
import Messages from "../common/messages/messages";

export default (props) => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">{props.children}</div>
    <Footer />
    <Messages />
  </div>
);
