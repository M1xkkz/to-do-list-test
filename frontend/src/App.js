import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WorkLogForm from './components/WorkLogForm';
import WorkLogList from './components/WorkLogList';
import EditWorkLog from './components/EditWorkLog';
import ReportPage from './components/ReportPage';
import './style.css';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">บันทึกงาน</Link> |{' '}
        <Link to="/logs">รายการงาน</Link> |{' '}
        <Link to="/report">รายงานสถานะ</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WorkLogForm />} />
        <Route path="/logs" element={<WorkLogList />} />
        <Route path="/logs/edit/:id" element={<EditWorkLog />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
