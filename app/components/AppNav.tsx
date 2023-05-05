import { NavBar } from "antd-mobile";

import { useNavigate } from "@remix-run/react";

export default ({ title, path }: any) => {
  const navigate = useNavigate();
  return (
    <NavBar
      onBack={() => {
        navigate(path ?? -1);
      }}
    >
      {title ?? "组件"}
    </NavBar>
  );
};
