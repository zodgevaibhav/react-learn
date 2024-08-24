import React, { useState } from "react";
import "./LeftRightSplitLayout.css";

export function LeftRightSplitLayout({ left: Left, right: Right }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleMouseOver = () => {
    console.log("On mouse over")
  //  setIsCollapsed(false);
  };

  const handleMouseOut = () => {
//    setIsCollapsed(true);
  };

  return (
    <div className="layout-container">
      <header className="header">Header</header>
      <div className="content">
        <div
          className={`left-pane${isCollapsed ? ".collapsed" : ""}`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div >
          <Left />
          </div>
        </div>
        <div
          className={`right-pane${isCollapsed ? ".expanded" : ""}`}
        >
          <Right />
        </div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
}
