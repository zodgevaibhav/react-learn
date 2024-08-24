import "./HomePageWithSideNav.css";

import React from "react";

export function HomePageWithSideNav({ left: Left, right: Right }) {
  return (
    <div className="layout-container">
      <header className="header">Header</header>
      <div className="content">
        <aside className="left-pane">
          <Left />
        </aside>
        <main className="right-pane">
          <Right />
        </main>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
}

