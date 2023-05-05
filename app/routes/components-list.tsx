import { Link } from "@remix-run/react";
import { Space } from "antd-mobile";
import AppNav from "~/components/AppNav";

export default function ComponentList() {
  return (
    <Space direction="vertical">
      <AppNav title="组件 - 列表" />
      <h3>通用</h3>
      <Link to="/components/button">组件 - 按钮</Link>
      <Link to="/components/icons">组件 - 图标</Link>
      <h3>布局</h3>
      <Link to="/components/auto-center">组件 - 自动居中</Link>
      <Link to="/components/divider">组件 - 分割线</Link>
      <Link to="/components/grid">组件 - 栅格</Link>
      <Link to="/components/safe-area">组件 - 安全区域</Link>
      <Link to="/components/space">组件 - 间距</Link>
      <h3>导航</h3>
      <Link to="/components/capsule-tabs">组件 - 胶囊选项卡</Link>
      <Link to="/components/index-bar">组件 - 序列</Link>
      <Link to="/components/jumbo-tabs">组件 - 复杂选项卡</Link>
      <Link to="/components/nav-bar">组件 - 导航栏</Link>
      <Link to="/components/side-bar">组件 - 侧边导航</Link>
      <Link to="/components/tab-bar">组件 - 标签栏</Link>
      <Link to="/components/tabs">组件 - 标签页</Link>
      <h3>信息展示</h3>
      <Link to="/components/avatar">组件 - 头像</Link>
      <Link to="/components/card">组件 - 卡片</Link>
      <Link to="/components/collapse">组件 - 折叠面板</Link>
      <Link to="/components/ellipsis">组件 - 文本省略</Link>
      <Link to="/components/floating-panel">组件 - 浮动面板</Link>
      <Link to="/components/image">组件 - 图片</Link>
      <Link to="/components/image-viewer">组件 - 图片查看器</Link>
      <Link to="/components/infinite-scroll">组件 - 无限滚动</Link>
      <Link to="/components/list">组件 - 列表</Link>
      <Link to="/components/page-indicator">组件 - 分页符</Link>
      <Link to="/components/steps">组件 - 步骤条</Link>
      <Link to="/components/swiper">组件 - 走马灯</Link>
      <Link to="/components/tag">组件 - 标签</Link>
      <Link to="/components/water-mark">组件 - 水印</Link>
      <Link to="/components/footer">组件 - 页脚</Link>
      <h3>信息录入</h3>
      <Link to="/components/cascader">组件 - 级联选择</Link>
      <Link to="/components/cascader-view">组件 - 级联选择视图</Link>
      <Link to="/components/check-list">组件 - 可勾选列表</Link>
      <Link to="/components/checkbox">组件 - 复选框</Link>
      <Link to="/components/form">组件 - 表单</Link>
      <Link to="/components/input">组件 - 输入框</Link>
      <Link to="/components/picker">组件 - 选择器</Link>
      <Link to="/components/picker-view">组件 - 选择器视图</Link>
      <Link to="/components/radio">组件 - 单选框</Link>
      <Link to="/components/rate">组件 - 评分</Link>
      <Link to="/components/search-bar">组件 - 搜索框</Link>
      <Link to="/components/selector">组件 - 选择组</Link>
      <Link to="/components/slider">组件 - 滑动输入条</Link>
      <Link to="/components/stepper">组件 - 步进器</Link>
      <Link to="/components/switch">组件 - 开关</Link>
      <Link to="/components/text-area">组件 - 文本域</Link>
      <h3>反馈</h3>
      <Link to="/components/action-sheet">组件 - 动作面板</Link>
      <Link to="/components/dialog">组件 - 对话框</Link>
      <Link to="/components/empty">组件 - 空状态</Link>
      <Link to="/components/error-block">组件 - 异常</Link>
      <Link to="/components/loading">组件 - 加载中</Link>
      <Link to="/components/mask">组件 - 背景蒙层</Link>
      <Link to="/components/modal">组件 - 弹窗</Link>
      <Link to="/components/popover">组件 - 气泡弹出框</Link>
      <Link to="/components/popup">组件 - 弹出层</Link>
      <Link to="/components/progress-bar">组件 - 进度条</Link>
      <Link to="/components/progress-circle">组件 - 进度圈</Link>
      <Link to="/components/pull-to-refresh">组件 - 下拉刷新</Link>
      <Link to="/components/result">组件 - 结果</Link>
      <Link to="/components/skeleton">组件 - 骨架屏</Link>
      <Link to="/components/swipe-action">组件 - 滑动操作</Link>
      <Link to="/components/toast">组件 - 轻提示</Link>
      <h3>引导提示</h3>
      <Link to="/components/badge">组件 - 徽标</Link>
      <Link to="/components/notice-bar">组件 - 通告栏</Link>
      {/* <div>其他</div> */}

      {/* <div>实验性</div> */}
    </Space>
  );
}
