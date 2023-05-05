import { ErrorBlock, Space } from "antd-mobile";
import AppNav from "~/components/AppNav";
import { DemoBlock } from "~/components/demos";

export default () => {
  return (
    <>
      <AppNav title="组件 - 异常" />
      <DemoBlock title="四种状态">
        <Space block direction="vertical" style={{ "--gap": "16px" }}>
          <ErrorBlock status="default" />
          <ErrorBlock status="disconnected" />
          <ErrorBlock status="empty" />
          <ErrorBlock status="busy" />
        </Space>
      </DemoBlock>
    </>
  );
};
