import { AutoCenter } from "antd-mobile";
import { DemoBlock } from "~/components/demos";
import AppNav from "~/components/AppNav";

const shortText = "dolor consectetur proident";
const longText =
  "Velit commodo eu ut excepteur esse laborum culpa reprehenderit consequat eu id. Velit proident esse magna anim ullamco aliqua consequat cupidatat exercitation amet est. In incididunt dolor exercitation pariatur dolor ad sit anim pariatur. Pariatur velit in culpa amet id ullamco officia consectetur Lorem dolore. Deserunt tempor minim fugiat pariatur proident nostrud commodo incididunt non irure sint sint. Amet fugiat laboris eiusmod do consectetur aliquip et laboris aliquip qui. Mollit ea anim reprehenderit magna tempor ullamco adipisicing fugiat mollit fugiat ea mollit nostrud do cupidatat. Sit fugiat minim aute Lorem nulla voluptate elit deserunt veniam reprehenderit id laboris sint nisi cillum. Cupidatat eiusmod laborum in labore consequat pariatur labore cillum anim sit ut sunt.";

export default () => {
  return (
    <>
      <AppNav title="组件 - 自动居中" />
      <DemoBlock title="内容不够整行宽度时自动居中">
        <AutoCenter>{shortText}</AutoCenter>
      </DemoBlock>

      <DemoBlock title="内容达到满宽后保持正常的左对齐">
        <AutoCenter>{longText}</AutoCenter>
      </DemoBlock>
    </>
  );
};
