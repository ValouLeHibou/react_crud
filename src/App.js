import './App.css';
import Home from './components/home.js'
import Articles from './components/articles.js'
import Article from './components/article.js'
import Users from './components/users'
import 'materialize-css/dist/css/materialize.min.css';
import Navigation from './components/navigation.js';
import {BrowserRouter as Routeur, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <Routeur>
              <Navigation/>
              <Route path="/" exact component={Home} />
              <Route path="/articles" exact component={Articles} />
              <Route path="/users" exact component={Users} />
              <Route path="/article/:id">
                  <Article />
              </Route>
          </Routeur>
      </div>
  );
}

export default App;
