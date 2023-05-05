import { useState } from "react";
import { Button, Space, WaterMark } from "antd-mobile";

import "~/styles/demo1.module.css";
import AppNav from "~/components/AppNav";

const textProps = {
  content: "Ant Design Mobile",
};

const rowsTextProps = {
  content: ["Ant Design Mobile", "Ant Design Mobile Pro"],
};

const imageProps = {
  image:
    "https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg",
  imageWidth: 115,
  imageHeight: 36,
  width: 140,
  height: 80,
};

export default () => {
  const [props, setProps] = useState<{ [key: string]: any }>(textProps);

  return (
    <div className="water-mark-overlay">
      <AppNav title="组件 - 水印" />
      <Space direction="vertical">
        <Button onClick={() => setProps(textProps)}>普通水印</Button>
        <br />
        <Button onClick={() => setProps(rowsTextProps)}>多行文字水印</Button>
        <br />
        <Button onClick={() => setProps(imageProps)}>图片水印</Button>
        <WaterMark {...props} />
      </Space>
    </div>
  );
};
