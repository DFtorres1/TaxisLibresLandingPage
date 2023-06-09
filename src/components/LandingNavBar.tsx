import { useEffect, useState } from "react";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FormOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Affix, Button, MenuProps, Image } from "antd";
import { Menu } from "antd";
import "../index.css";

const items: MenuProps["items"] = [
  {
    label: <a href="#home"></a>,
    key: "home",
    icon: (
      <Image width={50} preview={false} src={"/img/logoTaxisLibres.webp"} />
    ),
  },
  {
    label: <a href="#knowMore">Conocenos</a>,
    key: "knowMore",
    icon: <PlusOutlined />,
  },
  {
    label: <a href="#inscription">Inscribirse</a>,
    key: "inscription",
    icon: <FormOutlined />,
  },
];

const LandNavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [current, setCurrent] = useState("mail");
  const [navbarClass, setNavbarClass] = useState("transparent");
  const [navheight, setHeight] = useState("7vh");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 0 && navbarClass === "transparent") {
      setNavbarClass("colored");
      setHeight("6vh");
    } else if (currentPosition === 0 && navbarClass === "colored") {
      setNavbarClass("transparent");
      setHeight("7vh");
    }
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      style={{
        position: "fixed",
        transition: "all 0.8s",
        height: isMobile ? "auto" : navheight,
        width: isMobile ? "256" : "100%",
        backgroundColor: isMobile? "#5c5c94": collapsed? "#5c5c94" : "transparent",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
        color: "aliceblue",
        fontSize: "20px",
        zIndex: "999",
      }}
    >
      <Affix>
        <div
          style={{
            backgroundColor: "#5c5c94",
            display: "fixed",
          }}
        >
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              display: isMobile ? "block" : "none",
              backgroundColor: "#5c5c94",
              height: "9vh",
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode={isMobile ? "inline" : "horizontal"}
            items={items}
            inlineCollapsed={collapsed}
            style={{
              display:
                isMobile && collapsed
                  ? "none"
                  : isMobile && !collapsed
                  ? "block"
                  : "flex",
              height: isMobile ? "auto" : navheight,
              alignItems: "center",
              top: "0",
              justifyContent: isMobile ? "null" : "center",
            }}
            className={`navbar-default ${isMobile ? "" : navbarClass}`}
          />
        </div>
      </Affix>
    </div>
  );
};

export default LandNavBar;
