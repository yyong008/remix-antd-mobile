import { useState } from "react";
import { PullToRefresh, List } from "antd-mobile";
import { sleep } from "~/components/demos";
import AppNav from "~/components/AppNav";

function getNextData() {
  const ret: string[] = [];
  for (let i = 0; i < 18; i++) {
    ret.unshift(i + " sdfsdf");
  }
  return ret;
}

export default () => {
  const [data, setData] = useState(() => getNextData());
  return (
    <>
      <AppNav title="组件 -上拉刷新" />
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000);
          setData([...getNextData(), ...data]);
        }}
      >
        <List style={{ minHeight: "100vh" }}>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </PullToRefresh>
    </>
  );
};
