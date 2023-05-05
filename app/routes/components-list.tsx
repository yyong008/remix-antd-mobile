import { Link } from "@remix-run/react";
import { Space } from "antd-mobile";

export default function ComponentList() {
  return (
    <Space direction="vertical">
      <div>通用</div>
      <Link to="/components/button">组件 - 按钮</Link>
      <Link to="/components/icons">组件 - 图标</Link>
      <div>布局</div>
      <Link to="/components/auto-center">组件 - 自动居中</Link>
      <Link to="/components/divider">组件 - 分割线</Link>
      <Link to="/components/grid">组件 - 栅格</Link>
      <Link to="/components/safe-area">组件 - 安全区域</Link>
      <Link to="/components/space">组件 - 间距</Link>
      <div>导航</div>
      <Link to="/components/capsule-tabs">组件 - 胶囊选项卡</Link>
      <Link to="/components/index-bar">组件 - 序列</Link>
      <Link to="/components/jumbo-tabs">组件 - 复杂选项卡</Link>
      <Link to="/components/nav-bar">组件 - 导航栏</Link>
      <Link to="/components/side-bar">组件 - 侧边导航</Link>
      <Link to="/components/tab-bar">组件 - 标签栏</Link>
      <Link to="/components/tabs">组件 - 标签页</Link>
      <div>信息展示</div>

      <div>信息录入</div>

      <div>反馈</div>

      <div>引导提示</div>

      <div>其他</div>

      <div>实验性</div>
    </Space>
  );
}
