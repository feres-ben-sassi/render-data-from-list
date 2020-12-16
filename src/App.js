import logo from "./img.png";
import "./App.css";

function App() {
  const Users = [
    {
      id: "01",
      name: "John Deo",
      prix: "25 dt",
      phone: logo,
    },
    {
      id: "02",
      name: "Brad Pitt",
      prix: "17 dt",
      phone: logo,
    },
  ];

  return (
    <div>
      <ul>
        {Users.map((data) => (
          <li key={data.id}>
            <p>{data.name}</p>
            <p>{data.prix}</p>
            <img src={data.phone}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
