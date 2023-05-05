import { Grid } from "antd-mobile";
import AppNav from "~/components/AppNav";
import { DemoBlock } from "~/components/demos";

import "~/styles/demo1.module.css";

export default () => {
  return (
    <>
      <AppNav title="组件 - 表格" />
      <DemoBlock title="基础用法">
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className={"grid-demo-item-block"}>A</div>
          </Grid.Item>
          <Grid.Item>
            <div className={"grid-demo-item-block"}>B</div>
          </Grid.Item>
          <Grid.Item>
            <div className={"grid-demo-item-block"}>C</div>
          </Grid.Item>
          <Grid.Item>
            <div className={"grid-demo-item-block"}>D</div>
          </Grid.Item>
          <Grid.Item>
            <div className={"grid-demo-item-block"}>E</div>
          </Grid.Item>
        </Grid>
      </DemoBlock>

      <DemoBlock title="控制格子的跨度">
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className={"grid-demo-item-block"}>A</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className={"grid-demo-item-block"}>B</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className={"grid-demo-item-block"}>C</div>
          </Grid.Item>
          <Grid.Item>
            <div className={"grid-demo-item-block"}>D</div>
          </Grid.Item>
          <Grid.Item span={3}>
            <div className={"grid-demo-item-block"}>E</div>
          </Grid.Item>
        </Grid>
      </DemoBlock>
    </>
  );
};
