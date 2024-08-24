import React from "react";
import { Drawer, List, ListItem, Divider, ListItemText, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import './LeftPanel.css';

const LeftPanel = ({ items, logoSrc, isCollapsed, onClose }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={!isCollapsed}
      className={`left-drawer ${isCollapsed ? 'collapsed' : 'expanded'}`}
    >
      <div className={`logo-container ${!isCollapsed ? 'visible' : 'hidden'}`}>
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
