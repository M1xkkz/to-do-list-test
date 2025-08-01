import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditWorkLog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    task_type: 'Development',
    task_name: '',
    start_time: '',
    end_time: '',
    status: 'ดำเนินการ'
  });

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/logs`);
        const log = res.data.find((item) => item.id === parseInt(id));
        if (log) {
          setForm({
            task_type: log.task_type,
            task_name: log.task_name,
            start_time: log.start_time.slice(0, 16), // format for datetime-local
            end_time: log.end_time.slice(0, 16),
            status: log.status
          });
        } else {
          alert('ไม่พบข้อมูล');
          navigate('/logs');
        }
      } catch (error) {
        alert('โหลดข้อมูลล้มเหลว');
        navigate('/logs');
      }
    };

    fetchLog();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/logs/${id}`, form);
      alert('อัปเดตสำเร็จ');
      navigate('/logs');
    } catch (error) {
      alert('อัปเดตล้มเหลว');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>แก้ไขงาน</h2>
      <label>
        ประเภทงาน:
        <select name="task_type" value={form.task_type} onChange={handleChange}>
          <option value="Development">Development</option>
          <option value="Test">Test</option>
          <option value="Document">Document</option>
        </select>
      </label>
      <br />

      <label>
        ชื่องาน:
        <input
          type="text"
          name="task_name"
          value={form.task_name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        เวลาเริ่ม:
        <input
          type="datetime-local"
          name="start_time"
          value={form.start_time}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        เวลาสิ้นสุด:
        <input
          type="datetime-local"
          name="end_time"
          value={form.end_time}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        สถานะ:
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="ดำเนินการ">ดำเนินการ</option>
          <option value="เสร็จสิ้น">เสร็จสิ้น</option>
          <option value="ยกเลิก">ยกเลิก</option>
        </select>
      </label>
      <br />

      <button type="submit">อัปเดต</button>
    </form>
  );
}

export default EditWorkLog;
