import { Button, Space } from "antd-mobile";
import { DemoBlock } from "~/components/demos";
import { SearchOutline } from "antd-mobile-icons";

import AppNav from "~/components/AppNav";

export default () => {
  return (
    <>
      <AppNav title="组件 - 按钮" />
      <DemoBlock title="填充模式">
        <Space wrap>
          <Button color="primary" fill="solid">
            Solid
          </Button>
          <Button color="primary" fill="outline">
            Outline
          </Button>
          <Button color="primary" fill="none">
            None
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="块级按钮">
        <Button block color="primary" size="large">
          Block Button
        </Button>
      </DemoBlock>

      <DemoBlock title="按钮尺寸">
        <Space wrap align="center">
          <Button size="mini" color="primary">
            Mini
          </Button>
          <Button size="small" color="primary">
            Small
          </Button>
          <Button size="middle" color="primary">
            Middle
          </Button>
          <Button size="large" color="primary">
            Large
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="语义按钮">
        <Space wrap>
          <Button
            onClick={() => {
              alert("hello.");
            }}
          >
            Default
          </Button>
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Button>
          <Space>
            <SearchOutline />
            <span>搜索</span>
          </Space>
        </Button>
      </DemoBlock>

      <DemoBlock title="形状">
        <Space wrap>
          <Button shape="default" color="primary">
            Default Button
          </Button>
          <Button block shape="rounded" color="primary">
            Rounded Button
          </Button>
          <Button block shape="rectangular" color="primary">
            Rectangular Button
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="加载状态">
        <Space wrap>
          <Button loading color="primary" loadingText="正在加载">
            Loading
          </Button>
          <Button loading>Loading</Button>
          <Button
            loading="auto"
            onClick={async () => {
              //
            }}
          >
            Auto Loading
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="禁用状态">
        <Space wrap>
          <Button disabled>Disabled</Button>
          <Button disabled color="primary">
            Disabled
          </Button>
        </Space>
      </DemoBlock>
    </>
  );
};
