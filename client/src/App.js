import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/createpost'>Ceate a post</Link>
        <Link to='/'>Go to home</Link>
        <Switch>
          <Route path='/' exact Component={Home} />
          <Route path='/createpost' exact Component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
