export function DemoBlock({ title, children, padding }: any) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export function DemoDescription({ children }: any) {
  return (
    <div
      style={{
        color: "var(--adm-color-weak)",
      }}
    >
      {children}
    </div>
  );
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
