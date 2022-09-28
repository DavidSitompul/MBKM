import './App.css';
import Card from "./component/Card";
import Objek from "./Objek.json"

function App() {
  return (
    <>
  <h1 style={{ textAlign: "center", color: "green" }}>TOKPED Super KW</h1>
      <div className="kartu">
        {Objek.map((kartu) => {
          return <Card objek={kartu} />;
        })}
      </div>

    </>
  );
}

export default App;
