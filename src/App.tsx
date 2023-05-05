import { BrowserRouter } from "react-router-dom";
import './App.css';
import { AuthProvider } from './context';
import Router from './router/Router';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Router/>                
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
