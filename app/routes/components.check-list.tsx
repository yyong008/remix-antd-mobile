import { CheckList } from "antd-mobile";
import { DemoBlock } from "~/components/demos";
import {
  CheckCircleFill,
  CheckCircleOutline,
  SmileOutline,
} from "antd-mobile-icons";
import AppNav from "~/components/AppNav";

export default () => {
  return (
    <>
      <AppNav title="组件 - 可勾选列表" />
      <DemoBlock title="基础用法" padding="0">
        <CheckList defaultValue={["B"]}>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
          <CheckList.Item value="C" disabled>
            C
          </CheckList.Item>
          <CheckList.Item value="D" readOnly>
            D
          </CheckList.Item>
        </CheckList>
      </DemoBlock>

      <DemoBlock title="多选" padding="0">
        <CheckList multiple defaultValue={["B", "C"]}>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
          <CheckList.Item value="C">C</CheckList.Item>
        </CheckList>
      </DemoBlock>

      <DemoBlock title="自定义选中图标" padding="0">
        <CheckList activeIcon={<SmileOutline />} defaultValue={["B"]}>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
          <CheckList.Item value="C">C</CheckList.Item>
        </CheckList>
      </DemoBlock>

      <DemoBlock title="自定义列表右侧区域" padding="0">
        <CheckList
          extra={(active) =>
            active ? <CheckCircleFill /> : <CheckCircleOutline />
          }
          defaultValue={["B"]}
        >
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
          <CheckList.Item value="C">C</CheckList.Item>
        </CheckList>
      </DemoBlock>

      <DemoBlock title="整组只读" padding="0">
        <CheckList defaultValue={["B"]} readOnly>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
        </CheckList>
      </DemoBlock>

      <DemoBlock title="整组禁用" padding="0">
        <CheckList disabled>
          <CheckList.Item value="A">A</CheckList.Item>
          <CheckList.Item value="B">B</CheckList.Item>
        </CheckList>
      </DemoBlock>
    </>
  );
};
