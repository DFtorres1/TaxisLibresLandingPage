import "../styles/LandNavStyle.css";
import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Inicio",
    key: "home",
    icon: <MailOutlined />,
  },
  {
    label: "Conocenos",
    key: "knowMore",
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a href="#" target="_blank" rel="noopener noreferrer">
        Inscribirse
      </a>
    ),
    key: "inscription",
  },
];

const LandNavBar: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const [navbarClass, setNavbarClass] = useState("transparent");
  const [height, setHeight] = useState("10");

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 0 && navbarClass === "transparent") {
      setNavbarClass("colored");
      setHeight("7");
    } else if (currentPosition === 0 && navbarClass === "colored") {
      setNavbarClass("transparent");
      setHeight("10");
    }
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          height: `${height}%`,
          fontSize: "20px",
          alignItems: "center",
          width: "100%",
          transition: "all 0.8s",
          position: "fixed",
          top: "0",
        }}
        className={`navbar-default ${navbarClass}`}
      />
    </div>
  );
};

export default LandNavBar;
