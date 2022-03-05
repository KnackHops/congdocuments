import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import UnderRoot from './components/UnderRoot';
import ErrorBoundary from './wrappers/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <UnderRoot />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
