import { Provider } from 'react-redux';
import { store } from './store';
import Search from './search.jsx';
import List from './list.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        <div style={{
          padding: '20px',
          maxWidth: '400px',
          width: '100%',
          borderRadius: '15px',
          border: '1px solid gray',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <Search />
          <List />
        </div>
      </div>
    </Provider>
  );
};

export default App;