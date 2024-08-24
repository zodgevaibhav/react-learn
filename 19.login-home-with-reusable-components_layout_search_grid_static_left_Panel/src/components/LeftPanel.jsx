/* eslint-disable react/prop-types */
import React from "react";
import { Drawer, List, ListItem, Divider, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import './LeftPanel.css';

const LeftPanel = ({ items, logoSrc, isCollapsed}) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={!isCollapsed}
      className={`left-drawer`}
    >
      <div className={`logo-container`}>
        {!isCollapsed && <img src={logoSrc} alt="Logo" className="logo-image" />}
      </div>
      <div className="drawer-header">

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
  );
};

export default React.memo(LeftPanel);
