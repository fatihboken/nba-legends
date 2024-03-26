import Header from "./components/Header";
import "./App.css";
import CardContainer from "./components/CardContainer";
import { useState } from "react";

function App() {

  const [search, setSearch] = useState("");
  console.log(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <Header handleChange={handleChange} />
      <CardContainer search={search} />
    </div>
  );
}

export default App;
