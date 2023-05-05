import { AntOutline, ArrowDownCircleOutline } from "antd-mobile-icons";
import { DemoBlock } from "~/components/demos";
import { Space } from "antd-mobile";
import AppNav from "~/components/AppNav";

export default () => {
  return (
    <>
      <AppNav title="组件 - 图标" />
      <DemoBlock title="基础用法">
        <Space wrap style={{ fontSize: 36 }}>
          <AntOutline />
          <ArrowDownCircleOutline />
        </Space>
      </DemoBlock>
      <DemoBlock title="大小">
        <Space wrap align="center">
          <AntOutline fontSize={12} />
          <AntOutline fontSize={24} />
          <AntOutline fontSize={36} />
          <AntOutline fontSize={48} />
        </Space>
      </DemoBlock>
      <DemoBlock title="颜色">
        <Space wrap style={{ fontSize: 36 }}>
          <AntOutline color="#76c6b8" />
          <AntOutline color="var(--adm-color-primary)" />
          <AntOutline color="var(--adm-color-weak)" />
          <AntOutline color="var(--adm-color-danger)" />
        </Space>
      </DemoBlock>
    </>
  );
};
