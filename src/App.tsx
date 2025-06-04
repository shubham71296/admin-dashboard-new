import { AuthProvider } from './context/AuthContext';
import Router from './router/Router';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;