import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../styles/navbar.css";

class Navbar extends Component {
  state = {
    drawerVisible: false,
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand p-1" to="/">
            Combuy Career
          </Link>

          <Button
            type="text"
            id="menuButtonMobile"
            style={{
              color: "#fff",
              fontSize: "16px",
            }}
            onClick={() => this.setState({ drawerVisible: true })}
          >
            <MenuOutlined
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </Button>

          <Drawer
            title="เมนู"
            placement="right"
            closable={true}
            onClose={() => this.setState({ drawerVisible: false })}
            visible={this.state.drawerVisible}
            width={"90%"}
          >
            <Menu mode="inline">
              <Menu.Item
                key="alljob"
                onClick={() => this.setState({ drawerVisible: false })}
              >
                <span>ตำแหน่งงานทั้งหมด</span>
                <Link to="/allJob" />
              </Menu.Item>
              <Menu.Item
                key="internship"
                onClick={() => this.setState({ drawerVisible: false })}
              >
                <span>ฝึกงานกับเรา</span>
                <Link to="/internship" />
              </Menu.Item>
              <Menu.Item
                key="cantactUs"
                onClick={() => this.setState({ drawerVisible: false })}
              >
                <span>ติดต่อเรา</span>
                <Link to="/contact" />
              </Menu.Item>
            </Menu>
          </Drawer>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/allJob">
                  ตำแหน่งงานทั้งหมด
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/internship">
                  ฝึกงานกับเรา
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
