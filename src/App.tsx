import './App.css';
import LoanDetail from './components/LoanDetail';
import PayDetail from './components/PayDetail';

function App() {
  return (
    <div className="App container flex flex-col gap-3">
      <LoanDetail />
      <PayDetail />
    </div>
  );
}

export default App;
