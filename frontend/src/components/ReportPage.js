import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReportPage() {
  const [month, setMonth] = useState('');
  const [report, setReport] = useState([]);

  const fetchReport = async (selectedMonth) => {
    if (!selectedMonth) {
      setReport([]);
      return;
    }
    try {
      const res = await axios.get(`http://localhost:3001/report/month/${selectedMonth}`);
      setReport(res.data);
    } catch (error) {
      alert('โหลดรายงานล้มเหลว');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReport(month);
  }, [month]);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div>
      <h2>รายงานสรุปสถานะตามเดือน</h2>
      <label>
        เลือกเดือน:
        <input type="month" value={month} onChange={handleMonthChange} />
      </label>

      {report.length === 0 ? (
        <p>ไม่มีข้อมูลในเดือนนี้</p>
      ) : (
        <table border="1" cellPadding="5" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>สถานะ</th>
              <th>จำนวน</th>
            </tr>
          </thead>
          <tbody>
            {report.map((r) => (
              <tr key={r.status}>
                <td>{r.status}</td>
                <td>{r.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReportPage;
