import {Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Home from './containers/Home/Home';
import Editor from './containers/Editor/Editor';

function App() {
  return (
    <div className="App">
      <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/editor" component={Editor} />
          <Route path="/quiz" component={Quiz} />

      </Layout>
    </div>
  );
}

export default App;
