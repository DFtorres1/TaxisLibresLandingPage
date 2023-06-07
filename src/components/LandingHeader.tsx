import Button from "antd/es/button/button";
import { Content } from "antd/es/layout/layout";

const LandHeader = () => {
  return (
    <div>
      <Content
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          height: "100vh",
        }}
      >
        <div>Quieres ser parte de la Hackaton TaxisLibres 2023? </div><br/>
        <Button type='primary' shape='round'>Ingresa ya</Button>
      </Content>
    </div>
  );
};

export default LandHeader;
