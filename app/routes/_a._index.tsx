import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

// components:vendors
import { SearchBar } from "antd-mobile";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
      }}
    >
      <SearchBar />
      <h1>Welcome to Remix Antd Mobile</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <li>
          <Link to="/components-list" rel="noreferrer">
            Antd Mobile 组件列表
          </Link>
        </li>
      </ul>
    </div>
  );
}
