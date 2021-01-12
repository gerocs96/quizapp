import Layout from './components/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Layout>
        <Quiz/>
      </Layout>
    </div>
  );
}

export default App;
