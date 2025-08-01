import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function WorkLogForm() {
  const [form, setForm] = useState({
    task_type: 'Development',
    task_name: '',
    start_time: '',
    end_time: '',
    status: 'ดำเนินการ'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/logs', form);
      alert('บันทึกสำเร็จ');
      navigate('/logs');
    } catch (error) {
      alert('เกิดข้อผิดพลาดในการบันทึก');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>บันทึกรายการงาน</h2>
      <form onSubmit={handleSubmit}>
        {/* ประเภทงาน */}
        <div>
          <label htmlFor="task_type">ประเภทงาน</label>
          <select
            name="task_type"
            id="task_type"
            value={form.task_type}
            onChange={handleChange}
          >
            <option value="Development">Development</option>
            <option value="Test">Test</option>
            <option value="Document">Document</option>
          </select>
        </div>

        {/* ชื่องาน */}
        <div>
          <label htmlFor="task_name">ชื่องาน</label>
          <input
            type="text"
            name="task_name"
            id="task_name"
            value={form.task_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* เวลาเริ่ม */}
        <div>
          <label htmlFor="start_time">เวลาเริ่ม</label>
          <input
            type="datetime-local"
            name="start_time"
            id="start_time"
            value={form.start_time}
            onChange={handleChange}
            required
          />
        </div>

        {/* เวลาสิ้นสุด */}
        <div>
          <label htmlFor="end_time">เวลาสิ้นสุด</label>
          <input
            type="datetime-local"
            name="end_time"
            id="end_time"
            value={form.end_time}
            onChange={handleChange}
            required
          />
        </div>

        {/* สถานะ. */}
        <div>
          <label htmlFor="status">สถานะ</label>
          <select
            name="status"
            id="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="ดำเนินการ">ดำเนินการ</option>
            <option value="เสร็จสิ้น">เสร็จสิ้น</option>
            <option value="ยกเลิก">ยกเลิก</option>
          </select>
        </div>

        <button type="submit">บันทึก</button>
      </form>
    </div>
  );
}

export default WorkLogForm;
