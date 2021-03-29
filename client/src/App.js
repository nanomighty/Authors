import './App.css';
import Header from './components/Header';
import ListAll from './components/ListAll';
import New from './components/New';
import Edit from './components/Edit';
import Error from './components/Error';
import {Router} from '@reach/router';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ListAll path="/" />
        <New path="/new" />
        <Edit path="/edit/:_id" />
        <Error path="/error" default />
      </Router>
    </div>
  );
}

export default App;
