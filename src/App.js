import { Provider } from 'react-redux';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import { store } from './REDUX/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Home></Home>
        <About></About>
      </Provider>
    </div>
  );
}

export default App;
