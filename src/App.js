import { Provider } from 'react-redux'
import store from './redux/store'
import LandingPage from './pages/LandingPage'
import { ChakraProvider } from "@chakra-ui/react"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>

    <LandingPage />
    </ChakraProvider>
    </Provider>
  );
}

export default App;
