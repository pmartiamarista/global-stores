import Counter from "./components/Counter";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Counter {...{ multiplier: 1 }} />
      <Counter {...{ multiplier: 2 }} />
    </div>
  );
}

export default App;
