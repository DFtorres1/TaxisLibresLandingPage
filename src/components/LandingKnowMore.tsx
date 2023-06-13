import { Layout, Image, Row, Col } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import guardian from "../img/Guardian.webp"
import centinela from "../img/Centinela.webp"
import capitana from "../img/Capitana.webp"
import inspector from "../img/Inspector.webp"
import iconMoney from "../img/iconMoney.webp"
import iconFree from "../img/iconFree.webp"
import iconWorldPeople from "../img/iconWorldPeople.webp"
import iconDigital from "../img/iconDigital.webp"

const organizers = [
  { name: "Guardian", source: guardian },
  { name: "Centinela", source: centinela },
  { name: "Capitana", source: capitana },
  { name: "Inspector", source: inspector },
];

const LandKnowMore = () => {
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
      id="knowMore"
      style={{
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        maxHeight: "8000px",
        flexDirection: "column",
      }}
    >
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "22vh",
          }}
        >
          <Title style={{ color: "#fff", paddingBottom: "10px" }}>
            ¡Conoce más del evento!
          </Title>
        </Header>
        <Row
          justify={"center"}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "90vw",
            paddingLeft: "7vw",
            paddingTop: "5vh",
          }}
        >
          <Col style={{ textAlign: "center" }}>
            <Title style={{ color: "#C3DC00", fontSize: isMobile ? "20px" : "40px" }}>
              ¡Da solucion a retos reales sobre movilidad en el país y obtén
              beneficios!
            </Title>
            <Title
              style={{ color: "#C3DC00", fontSize: isMobile ? "40px" : "60px" }}
            >
              <Image
                preview={false}
                width={isMobile ? 130 : 280}
                src={iconFree}
              />{" "}
              Gratuito
            </Title>
            <Title
              style={{ color: "#C3DC00", fontSize: isMobile ? "40px" : "60px" }}
            >
              100% digital
              <Image
                preview={false}
                width={isMobile ? 130 : 280}
                src={iconDigital}
              />
            </Title>
            <Title
              style={{ color: "#C3DC00", fontSize: isMobile ? "40px" : "60px" }}
            >
              <Image
                preview={false}
                width={isMobile ? 130 : 280}
                src={iconWorldPeople}
              />
              +540 personas
            </Title>
            <Title
              style={{ color: "#C3DC00", fontSize: isMobile ? "40px" : "60px" }}
            >
              +$USD 25K
              <Image
                preview={false}
                width={isMobile ? 130 : 280}
                src={iconMoney}
              />
            </Title>
            <Title level={2} style={{ color: "#C3DC00" }}>
              Organizan
            </Title>
            <div
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                display: "flex",
                height: isMobile ? "180vh" : "20vh",
                flexDirection: isMobile ? "column" : "row",
                marginBottom: "5px",
              }}
            >
              {organizers.map((organizer, organizerkey) => (
                <Image
                  style={{
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: isMobile ? "15px" : "",
                    paddingBottom: isMobile ? "15px" : "",
                    maxWidth: isMobile ? "300px" : "140px",
                  }}
                  key={organizerkey}
                  width={isMobile ? 250 : 160}
                  src={organizer.source}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default LandKnowMore;
