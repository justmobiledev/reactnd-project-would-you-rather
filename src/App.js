import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './navigation/NavigationBar';
import {HomePage} from './components'

function App() {
  return (
        <div className="App">
            <NavigationBar/>
          <h1>'Would You Rather' Game</h1>
          <HomePage/>
    </div>
  );
}

export default App;
