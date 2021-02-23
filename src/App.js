import './App.css';
import { MainLayout } from './views/main-layout.component';
import { AppRoutes } from './navigation/routes';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <AppRoutes></AppRoutes>
      </MainLayout>
    </div>
  );
}

export default App;
