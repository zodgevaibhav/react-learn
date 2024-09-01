import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box,
  CssBaseline,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import './LeftPanel.css'; // Import the CSS file

const LeftPanel = ({ items, logoSrc , logoSrcSmall}) => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Drawer component for the sidebar */}
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        className={`drawer ${open ? 'drawer-open' : 'drawer-closed'}`}
        classes={{ paper: 'drawer-paper' }}
      >
        <Box className="drawer-content">
          {/* Logo */}
          {open ? logoSrc && (
            <img src={logoSrc} alt="Logo" className="logo" />
          ):logoSrcSmall && (
            <img src={logoSrcSmall} alt="Logo"  className="small-logo"/>
          )}
          {/* Icon button to collapse/expand the drawer */}
          <IconButton onClick={handleToggle} className="icon-button">
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        <Divider />
        {/* List of items inside the drawer */}
        <List>
          {items.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link} to={item.route}
              className={`list-item ${open ? 'list-item-open' : ''}`}
            >
              <ListItemIcon className="list-item-icon">
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} className="list-item-text" />}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default LeftPanel;
