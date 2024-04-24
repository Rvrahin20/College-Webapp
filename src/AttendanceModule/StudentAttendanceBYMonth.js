import  { React, useState ,useEffect} from 'react';
import axios from 'axios';
const AttendanceTracker = () => {
    const [id, GetTeacherBYId] = useState([]);
  const [ids, setId] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5198/api/Attendance/GetStudentAttendenceById/"+ ids)
      .then((response) => {
        console.log(response.data);
        GetTeacherBYId([response.data]);
      })
      .catch((error) => {
        console.log(error);
       
      });
  },[ids]);
  useEffect(() => {
    axios
      .get("http://localhost:5198/api/Attendance/GetStudentsAttendenceByMonth/"+ selectedMonth)
      .then((response) => {
        console.log(response.data);
        setAttendanceRecords([response.data]);
      })
      .catch((error) => {
        console.log(error);
       
      });
  },[selectedMonth]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setId(ids); 
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Enter Student ID:</label>
        <input
          id="id"
          type="text"
          value={ids}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="month">Month:</label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="2024-01">January</option>
          <option value="2024-02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
         
        </select>
       
      </form>
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>Total Working Days</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.teacherId}>
              <td>{record.totalWorkDays}</td>
              <td>{record.present}</td>
              <td>{record.absent}</td>
              <td>{record.attendancePercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTracker;