import { Button } from "antd-mobile";

export default function MessageRoute() {
  return <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>This is Message Page</div> 
      <Button size="small">返回</Button>
    </div> 
}
