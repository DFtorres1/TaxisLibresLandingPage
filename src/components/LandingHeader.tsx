import { Carousel, Image, Row, Space } from "antd";
import Button from "antd/es/button/button";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";

const logos = [
  { name: "TaxisLibres", source: "/img/logoTaxisLibres.webp" },
  { name: "Vanti", source: "/img/logoVanti.webp" },
  { name: "Ecopetrol", source: "/img/logoEcopetrol.webp" },
  { name: "TGI", source: "/img/logoTGI.webp" },
  { name: "Volkswagen", source: "/img/logoVolkswagen.webp" },
  { name: "Ford", source: "/img/logoFord.webp" },
];

const LandHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div
      id="home"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Content
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          height: isMobile ? "100vh" : "78vh",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundImage: "url(/img/logoTaxisLibres.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            opacity: "0.06",
            zIndex: "1"
          }}
        />
        <Title
          level={isMobile ? 2 : 1}
          style={{ paddingBottom: "50px", color: "#C3DC00", zIndex:"10"}}
        >
          Esás listo para la Hackathon
          <br style={{ display: isMobile ? "" : "none" }} /> TaxisLibres 2023
        </Title>
        <Button
          style={{
            height: "60px",
            width: "250px",
            fontSize: "25px",
            zIndex: "1",
            backgroundColor: "#C3DC00",
          }}
          href="#inscription"
          size="large"
          type="primary"
          shape="round"
        >
          ¡Inscribete ahora!
        </Button>
      </Content>
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          height: isMobile ? "100vh" : "20vh",
          flexDirection: isMobile ? "column" : "row",
          marginBottom: "5px",
        }}
      >
        <Title
          level={2}
          style={{ display: isMobile ? "" : "none", color: "#C3DC00" }}
        >
          Nuestros patrocinadores
        </Title>
        {logos.map((logo, logokey) => (
          <Image
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              paddingTop: isMobile ? "15px" : "",
              paddingBottom: isMobile ? "15px" : "",
              maxWidth: isMobile ? "160px" : "140px",
            }}
            key={logokey}
            width={isMobile ? 160 : 140}
            src={logo.source}
          />
        ))}
      </div>
    </div>
  );
};

export default LandHeader;
