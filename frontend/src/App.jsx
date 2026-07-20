import GooeyNav from "./components/GooeyNav";

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Skills", href: "#" },
  { label: "Contact", href: "#" },
];

function App() {
  return (
    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
      }}
    >
      <div style={{ height: "600px", position: "relative" }}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
}

export default App;