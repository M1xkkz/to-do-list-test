import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function WorkLogList() {
  const [logs, setLogs] = useState([]);
  const [date, setDate] = useState('');

  const fetchLogs = async (filterDate = '') => {
    try {
      const url = filterDate
        ? `http://localhost:3001/logs/date/${filterDate}`
        : 'http://localhost:3001/logs';
      const res = await axios.get(url);
      setLogs(res.data);
    } catch (error) {
      alert('โหลดข้อมูลไม่สำเร็จ');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    fetchLogs(e.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm('ยืนยันการลบรายการนี้?')) {
      try {
        await axios.delete(`http://localhost:3001/logs/${id}`);
        fetchLogs(date);
      } catch (error) {
        alert('ลบไม่สำเร็จ');
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>รายการงาน</h2>
      <label>
        ค้นหาตามวันที่:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>

      <table border="1" cellPadding="5" style={{ marginTop: 10, width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th>ประเภทงาน</th>
            <th>ชื่องาน</th>
            <th>เวลาเริ่ม</th>
            <th>เวลาสิ้นสุด</th>
            <th>สถานะ</th>
            <th>สร้างเมื่อ</th>
            <th>อัปเดตล่าสุด</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {logs.length === 0 ? (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>
                ไม่มีข้อมูล
              </td>
            </tr>
          ) : (
            logs.map((log) => (
              <tr key={log.id}>
                <td>{log.task_type}</td>
                <td>{log.task_name}</td>
                <td>{new Date(log.start_time).toLocaleString()}</td>
                <td>{new Date(log.end_time).toLocaleString()}</td>
                <td>{log.status}</td>
                <td>{log.created_at ? new Date(log.created_at).toLocaleString() : '-'}</td>
                <td>{log.updated_at ? new Date(log.updated_at).toLocaleString() : '-'}</td>
                <td>
                  <Link to={`/logs/edit/${log.id}`}>แก้ไข</Link> |{' '}
                  <button onClick={() => handleDelete(log.id)}>🗑️</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WorkLogList;
