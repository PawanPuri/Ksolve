import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassList from './components/ClassList';
import ClassDetail from './components/ClassDetail';
import CommentSection from './components/CommentSection';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ClassList />} />
                <Route path="/class/:id" element={<ClassDetail />} />
                <Route path="/class/:classId/lecture/:lectureId/comments" element={<CommentSection />} />
            </Routes>
        </Router>
    );
}

export default App;