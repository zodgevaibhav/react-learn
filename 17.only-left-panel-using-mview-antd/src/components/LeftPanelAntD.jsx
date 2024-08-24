import React, { useState } from "react";
import { Drawer, List, Divider, Button } from "antd";
import { MenuOutlined, ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";

export function LeftPanelAntD({ items, logoSrc }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button 
        type="dashed" 
        icon={<MenuOutlined />} 
        onClick={toggleDrawer} 
        style={{ marginBottom: 10 }}
      />
      <Drawer
        placement="left"
        closable={false}
        onClose={toggleDrawer}
        visible={open}
        width={open ? 200 : 60}
        style={{ transition: "width 0.3s" }}
      >
        <div
          style={{
            justifyContent: 'center',
            padding: open ? '10px' : '0px',
            transition: 'height 0.3s',
          }}
        >
          {open && (
            <img
              src={logoSrc}
              alt="Logo"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          )}
        </div>
        <Divider />
        <List
          dataSource={items}
          renderItem={({ name, route, icon: Icon }) => (
            <List.Item key={name} style={{ paddingLeft: open ? '5%' : '20px' }}>

              <Link to={route} style={{ display: 'flex', alignItems: 'center' }}>
                <Icon style={{ marginRight: open ? '20%' : '0', transition: 'margin 0.3s'  }} />
                {open && <span>{name}</span>}
              </Link>

            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
}
