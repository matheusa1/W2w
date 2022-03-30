import 'antd/dist/antd.css';
import AppRoutes from "./Routes";
import AppLayout from './Layout';
function App() {
  return (
      <AppLayout>
        <AppRoutes/>
      </AppLayout>
  );
}

export default App;
