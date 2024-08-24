import React, { useState, memo } from "react";
import "./LeftRightSplitLayout.css";

const LeftRightSplitLayout = ({ left: Left, right: Right }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="layout-container">
      <header className="header">Header</header>
      <div
        className="content"
//        onMouseOver={() => setIsCollapsed(false)}
//        onMouseOut={() => setIsCollapsed(true)}
      >
        <div
          className={`left-pane${isCollapsed ? " collapsed" : ""}`}
        >
          <Left isCollapsed={isCollapsed} />
        </div>
        <div
          className={`right-pane${isCollapsed ? " expanded" : ""}`}
        >
          <Right />
        </div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default memo(LeftRightSplitLayout);
