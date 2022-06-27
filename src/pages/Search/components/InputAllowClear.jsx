import { Input } from "antd";

const InputAllowClear = () => {
  return (
    <Input
      placeholder="Filme, série, anime, plataforma"
      allowClear
      size="large"
      style={{ marginTop: "20px" }}
    />
  );
};

export default InputAllowClear;
