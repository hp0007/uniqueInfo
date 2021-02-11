import { Switch,Route } from 'react-router-dom';
import './App.css';
import './Responsive.css'
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path='/uniqueInfo' component={Home}></Route>
    </Switch>
  );
}

export default App;
