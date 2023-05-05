import { FloatingPanel, List } from "antd-mobile";
import AppNav from "~/components/AppNav";

const data = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
];

const anchors = [
  100,
  typeof window === "undefined" ? 0 : window.innerHeight * 0.4,
  typeof window === "undefined" ? 0 : window.innerHeight * 0.8,
];

export default () => {
  return (
    <>
      <AppNav title="组件 - 浮动面板" />
      <FloatingPanel anchors={anchors}>
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </FloatingPanel>
    </>
  );
};
