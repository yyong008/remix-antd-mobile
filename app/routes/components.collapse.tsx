import { Collapse } from "antd-mobile";
import AppNav from "~/components/AppNav";
import { DemoBlock } from "~/components/demos";

export default () => {
  return (
    <>
      <AppNav title="组件 - 折叠面板" />
      <DemoBlock title="基础用法" padding="0">
        <Collapse defaultActiveKey={["1"]}>
          <Collapse.Panel key="1" title="第一项">
            {mockContents[0]}
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项">
            {mockContents[1]}
          </Collapse.Panel>
          <Collapse.Panel key="3" title="第三项">
            {mockContents[2]}
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>

      <DemoBlock title="手风琴模式" padding="0">
        <Collapse accordion>
          <Collapse.Panel key="1" title="第一项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="3" title="第三项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>
    </>
  );
};

const mockContents = Array(5)
  .fill(null)
  .map(
    () =>
      "Ipsum consectetur aliquip elit Lorem eu proident. Culpa minim ea sit deserunt incididunt sunt incididunt aliquip eu do pariatur ipsum magna reprehenderit cillum. Proident deserunt ex sit ut sunt exercitation velit deserunt ex cillum. Est est amet in aute id culpa voluptate adipisicing culpa esse nostrud. Amet enim sint dolor fugiat in velit occaecat commodo tempor velit est anim est. Quis velit laboris labore officia velit nisi non commodo exercitation elit nulla non et ex ex. Laboris aliqua consequat reprehenderit commodo ullamco velit elit."
  );
