import { RecoilRoot } from 'recoil';
import RouteComponents from './components/RouteComponents';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RouteComponents />
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
}

export default App;
