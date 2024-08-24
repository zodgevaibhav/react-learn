import React, { useState } from "react";
import { Drawer, List, ListItem, Divider, IconButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import './LeftPanel.css'; // Import the CSS file

export function LeftPanel({ items, logoSrc }) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleDrawerOpen} className="menu-button">
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        className={`left-drawer ${open ? 'open' : 'closed'}`}
      >
        <div className={`logo-container ${open ? 'visible' : 'hidden'}`}>
          {open && <img src={logoSrc} alt="Logo" className="logo-image" />}
        </div>
        <div className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {items.map(({ name, route, icon: Icon }, index) => (
            <ListItem button key={index} component={Link} to={route} className="list-item">
              <Icon className="list-item-icon" />
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
