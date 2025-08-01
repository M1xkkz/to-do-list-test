const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'worklog'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

// เพิ่มข้อมูล
app.post('/logs', (req, res) => {
  const { task_type, task_name, start_time, end_time, status } = req.body;
  db.query(
    `INSERT INTO work_logs (task_type, task_name, start_time, end_time, status) VALUES (?, ?, ?, ?, ?)`,
    [task_type, task_name, start_time, end_time, status],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId });
    }
  );
});

// ✅ ดึงข้อมูลทั้งหมด
app.get('/logs', (req, res) => {
  db.query('SELECT * FROM work_logs ORDER BY start_time DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// ✅ ดึงข้อมูลตามวันที่
app.get('/logs/date/:date', (req, res) => {
  const date = req.params.date;
  db.query(
    'SELECT * FROM work_logs WHERE DATE(start_time) = ? ORDER BY start_time',
    [date],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

// ✅ แก้ไขข้อมูล
app.put('/logs/:id', (req, res) => {
  const { task_type, task_name, start_time, end_time, status } = req.body;
  const id = req.params.id;
  db.query(
    `UPDATE work_logs 
     SET task_type = ?, task_name = ?, start_time = ?, end_time = ?, status = ?, updated_at = NOW() 
     WHERE id = ?`,
    [task_type, task_name, start_time, end_time, status, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.sendStatus(200);
    }
  );
});

// ✅ ลบข้อมูล
app.delete('/logs/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM work_logs WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(200);
  });
});

// ✅ รายงานสรุปตามเดือน
app.get('/report/month/:month', (req, res) => {
  const month = req.params.month;
  db.query(
    `SELECT status, COUNT(*) AS count 
     FROM work_logs 
     WHERE DATE_FORMAT(start_time, '%Y-%m') = ? 
     GROUP BY status`,
    [month],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});
