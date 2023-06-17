import Cascader, { CascaderProps } from "antd/es/cascader";
import { Button, Col, Form, Input, Row, Select } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";

interface DataNodeType {
  value: string;
  label: string;
}

const residences: CascaderProps<DataNodeType>["options"] = [
  {
    value: "colombia",
    label: "Colombia",
  },
  {
    value: "pais2",
    label: "Pais2",
  },
  {
    value: "pais3",
    label: "Pais3",
  },
  {
    value: "pais4",
    label: "Pais4",
  },
  {
    value: "pais5",
    label: "Pais5",
  },
  {
    value: "pais6",
    label: "Pais6",
  },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const prefixes = ["57", "58", "59", "60", "61", "62", "63", "64"];

const areas: CascaderProps<DataNodeType>["options"] = [
  {
    value: "development",
    label: "Programacion",
  },
  {
    value: "design",
    label: "Diseño",
  },
  {
    value: "comunication",
    label: "Comunicación",
  },
  {
    value: "dataAnalisis",
    label: "Análisis de datos",
  },
  {
    value: "other",
    label: "Otro",
  },
];

const { Option } = Select;

const LandInscription = () => {
  const [form] = Form.useForm();

  const [otherArea, setOtherArea] = useState(false);

  const handleChange = (event: any) => {
    setOtherArea(event[0] === "other" ? true : false);
    console.log(event[0]);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        {prefixes.map((prefix, prefixInd) => (
          <Option key={prefixInd} value={prefix}>
            +{prefix}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <div
      id="inscription"
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Title style={{ paddingBottom: "50px" }}>
        ¡Inscribete a la hackathon!
      </Title>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{ prefix: "57" }}
        style={{ maxWidth: "1200px", minWidth: "400px" }}
        scrollToFirstError
      >
        <Row justify={"center"} style={{ width: "400px" }}>
          <Col>
            <Form.Item
              style={{ paddingBottom: "5px", width: "400px" }}
              name="name"
              rules={[
                {
                  required: true,
                  message: "¡Introduce tu nombre!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Nombre" />
            </Form.Item>
            <Form.Item
              style={{ paddingBottom: "5px" }}
              name="email"
              rules={[
                {
                  type: "email",
                  message: "El Email no es valido",
                },
                {
                  required: true,
                  message: "Por favor introduce tu email",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              style={{ paddingBottom: "5px" }}
              name="area"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Selecciona tu área",
                },
              ]}
            >
              <Cascader
                placeholder="Area"
                onChange={handleChange}
                options={areas}
              />
            </Form.Item>

            <Form.Item
              style={{ display: otherArea ? "" : "none", paddingBottom: "5px" }}
              name="otherArea"
              rules={[
                {
                  required: otherArea,
                  message: "Escribe el área",
                },
              ]}
            >
              <Input placeholder="Otra area" disabled={!otherArea} />
            </Form.Item>

            <Form.Item
              style={{ paddingBottom: "5px" }}
              name="residence"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Selecciona tu pais de residencia",
                },
              ]}
            >
              <Cascader placeholder="País" options={residences} />
            </Form.Item>

            <Form.Item
              style={{ paddingBottom: "5px" }}
              name="phone"
              rules={[
                { required: true, message: "Introduce tu número de contacto" },
              ]}
              hasFeedback
            >
              <Input placeholder="Celular" addonBefore={prefixSelector} />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                style={{
                  height: "50px",
                  width: "220px",
                  fontSize: "20px",
                  zIndex: "1",
                  backgroundColor: "#5c5c94",
                }}
                href="#inscription"
                size="large"
                type="primary"
                shape="round"
              >
                ¡Inscribete ahora!
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LandInscription;
