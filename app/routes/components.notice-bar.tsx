import { NoticeBar, Space } from "antd-mobile";
import { DemoBlock } from "~/components/demos";
import { CompassOutline, CloseCircleOutline } from "antd-mobile-icons";
import AppNav from "~/components/AppNav";

const demoLongText = "sdfsdfsdfsdf";

export default () => {
  return (
    <>
      <AppNav title="组件 - 通知条" />
      <DemoBlock title="通告栏语义" padding="0" background="transparent">
        <Space block direction="vertical">
          <NoticeBar content="默认" color="default" />
          <NoticeBar content="警告" color="alert" />
          <NoticeBar content="错误" color="error" />
          <NoticeBar content="信息" color="info" />
        </Space>
      </DemoBlock>

      <DemoBlock title="可关闭" padding="0">
        <NoticeBar content="这条通知可以关闭" color="alert" closeable />
      </DemoBlock>

      <DemoBlock title="超长滚动" padding="0">
        <NoticeBar content={demoLongText} color="alert" />
      </DemoBlock>

      <DemoBlock title="多行展示" padding="0">
        <NoticeBar
          content="适用于当前页面内信息的通知，是一种较醒目的页面内通知方式"
          wrap
          color="alert"
        />
      </DemoBlock>

      <DemoBlock title="自定义" padding="0" background="transparent">
        <Space block direction="vertical">
          <NoticeBar
            extra={<CloseCircleOutline style={{ fontSize: 18 }} />}
            icon={<CompassOutline />}
            content={"自定义图标"}
          />
          <NoticeBar
            extra={
              <Space style={{ "--gap": "12px" }}>
                <span>查看详情</span>
                <span>关闭</span>
              </Space>
            }
            content={"自定义右侧功能区"}
            color="alert"
          />
        </Space>
      </DemoBlock>
    </>
  );
};
