import { Image } from "antd";
import Button from "antd/es/button/button";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import logoTaxis from "../img/logoTaxisLibres.webp";
import logoVanti from "../img/logoVanti.webp";
import logoEcopetrol from "../img/logoEcopetrol.webp";
import logoTGI from "../img/logoTGI.webp";
import logoVolkswagen from "../img/logoVolkswagen.webp";
import logoFord from "../img/logoFord.webp";

const logos = [
  { name: "TaxisLibres", source: logoTaxis },
  { name: "Vanti", source: logoVanti },
  { name: "Ecopetrol", source: logoEcopetrol },
  { name: "TGI", source: logoTGI },
  { name: "Volkswagen", source: logoVolkswagen },
  { name: "Ford", source: logoFord },
];

const LandHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleMediaQueryChange = (event: any) => {
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
            backgroundImage: `url(${logoTaxis})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            maxHeight: "95vh",
            maxWidth: "95vw",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            opacity: "0.06",
            zIndex: "1",
          }}
        />
        <Title
          level={isMobile ? 2 : 1}
          style={{ paddingBottom: "50px", color: "#C3DC00", zIndex: "10" }}
        >
          Estás listo para la Hackathon
          <br style={{ display: isMobile ? "" : "none" }} /> TaxisLibres 2023?
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
