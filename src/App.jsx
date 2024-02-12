import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import News from './pages/News';
import Courses from './pages/Courses';
import EbookPage from './pages/EbookPage';
export default function App() {

  return (
    <>
    <Router>
        <Routes>
      <Route path="/" element={<HomePage />} >
        </Route>
      <Route path="/ebook" element={<EbookPage />} />
        <Route path="/News" element={<News />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </>
  )
}
