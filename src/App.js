// import { Link } from 'react-router-dom'
import Input from './components/Input'
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Input 
        defaultState="meu state"
      />
      <Input 
        defaultState="meu state 2"
      />
      <Input 
        defaultState="meu state 3"
      />

        {/* <Button text="Pronto"/>
        <Button text="Voltar"/> */}

      {/* <Link to="/page2">Home</Link> */}

      {/* <button 
        onClick={() => console.log("clicado")}
      >
        Me clique!
      </button> */}
    </div>
  );
}

export default App;
