import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import DirectMatching from './pages/DirectMatching';
import DirectMatchingList from './pages/DirectMatchingList';
import DirectMatchingPost from './pages/DirectMatchingPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>home</>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/match/direct/write" element={<DirectMatching />} />
            <Route path="/match/direct" element={<DirectMatchingList />} />
            <Route
              path={`/match/direct/:postId`}
              element={<DirectMatchingPost />}
            />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
