import { Outlet, useNavigate } from "@remix-run/react";
import { Badge, TabBar } from "antd-mobile";

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

export default () => {
  const navigate = useNavigate();
  const tabs = [
    {
      key: "home",
      title: "首页",
      icon: <AppOutline />,
      badge: Badge.dot,
      path: "/",
    },
    {
      key: "todo",
      title: "待办",
      icon: <UnorderedListOutline />,
      badge: "5",
      path: "/todo",
    },
    {
      key: "message",
      title: "消息",
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: "99+",
      path: "/message",
    },
    {
      key: "personal",
      title: "我的",
      icon: <UserOutline />,
      path: "/personal",
    },
  ];

  return (
    <>
      <div>
        <Outlet />
      </div>
      <TabBar
        style={{ position: "fixed", bottom: 0, width: "100%" }}
        onChange={(key) => {
          navigate(tabs.filter((tab) => tab.key === key)[0].path);
        }}
      >
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            onClick={() => {}}
          />
        ))}
      </TabBar>
    </>
  );
};
