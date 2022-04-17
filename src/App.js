import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TinderCards from './components/TinderCards';
import Chat from './components/Chat'

function App() {
  return (
    <div className="app">
  
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={TinderCards} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
