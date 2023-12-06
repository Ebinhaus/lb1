import logo from './logo.svg';
import './App.css';

function App() {

  function Greeting(name){
    alert(`Привет ${name}`)
  }

  return (
    <div>
      <h3>Привет от Макса!!!</h3>
      <p>Обращение к новой функции</p>
      <My/>
      <button onClick={() => Greeting("Макс")}>Нажми на меня!</button>
    </div>
  );
}

function My(){
  return (
    <div>
      <h3>Привет от Макса!!!</h3>
      <p>Вызов из новой функции</p>

    </div>
  );
}



export default App;
