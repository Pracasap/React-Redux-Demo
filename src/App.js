import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewCakeContainer from './components/NewCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
