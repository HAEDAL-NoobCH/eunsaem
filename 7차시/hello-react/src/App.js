import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Eunsaem";
  return (
    <div>
      {name == "Eunsaem" ? <h1>정답</h1> : <h1>틀림</h1>}
      {name == "Eunsaem" && <h1>정답</h1>}
    </div>
  );
}

export default App;
