import './App.css';
import Questao01 from './components/Questao01/Questao01';
import Questao01A from './components/Questao01A/Questao01A';
import Questao01B from './components/Questao01B/Questao01B';

function App() {
  return (
    <div className="App">
      <Questao01>
        <Questao01A />
        <Questao01B />
      </Questao01>
    </div>
  );
}

export default App;
