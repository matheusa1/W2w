import 'antd/dist/antd.css';
import AppRoutes from "./Routes";
import AppLayout from './Layout';
import { AuthProvider } from './hooks/auth';
function App() {
  return (
    <AuthProvider>
      <AppLayout>
        <AppRoutes/>
      </AppLayout>
    </AuthProvider>
  );
}

export default App;
