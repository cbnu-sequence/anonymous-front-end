import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from '../pages/Admin';
import DirectMatching from '../pages/DirectMatching';
import DirectMatchingList from '../pages/DirectMatchingList';
import DirectMatchingPost from '../pages/DirectMatchingPost';
const RouteComponents = () => {
  return (
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
  );
};
export default RouteComponents;
