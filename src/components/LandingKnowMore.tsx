import { Layout, Image, Row, Col } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";

const organizers = [
  { name: "Guardian", source: "/Guardian.webp" },
  { name: "Centinela", source: "/Centinela.webp" },
  { name: "Capitana", source: "/Capitana.webp" },
  { name: "Inspector", source: "/Inspector.webp" },
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
            <Title style={{ color: "#C3DC00", fontSize: isMobile ? "30px" : "50px" }}>
              ¡Da solucion a retos reales sobre movilidad en el país y obtén
              beneficios!
            </Title>
            <Title
              style={{ color: "#C3DC00", fontSize: isMobile ? "50px" : "70px" }}
            >
              <Image
                preview={false}
                width={isMobile ? 150 : 300}
                src="/iconFree.webp"
              />{" "}
              Gratuito
            </Title>
            <Title
              style={{ color: "#C3DC00", fontSize: isMobile ? "50px" : "70px" }}
            >
              100% digital
              <Image
                preview={false}
                width={isMobile ? 150 : 300}
                src="/iconDigital.webp"
              />
            </Title>
            <Title
              style={{ color: "#C3DC00", fontSize: isMobile ? "50px" : "70px" }}
            >
              <Image
                preview={false}
                width={isMobile ? 150 : 300}
                src="/iconWorldPeople.webp"
              />
              +540 personas
            </Title>
            <Title
              style={{ color: "#C3DC00", fontSize: isMobile ? "50px" : "70px" }}
            >
              +$USD 25K
              <Image
                preview={false}
                width={isMobile ? 150 : 300}
                src="/iconMoney.webp"
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
