import { Button } from "antd-mobile";

export default function ToDoRoute() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>This is ToDo Page</div> 
      <Button size="small">返回</Button>
    </div>
  );
}
