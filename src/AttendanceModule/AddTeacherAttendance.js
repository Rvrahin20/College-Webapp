import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAttendanceTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5198/api/Teacher/GetAll');
        setTeachers(response.data);
        // Initialize attendance state with all teachers marked as absent
        setAttendance(response.data.map(teacher => ({ teacherId: teacher.teacherId, isTeacherPresent: 'A' })));
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  const handleCheckboxChange = (teacherId, isTeacherPresent) => {
    // Update the attendance state based on the checkbox status
    setAttendance(prevAttendance => {
      return prevAttendance.map(item => {
        if (item.teacherId === teacherId) {
          return { ...item, isTeacherPresent };
        } else {
          return item;
        }
      });
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Retrieve the date of the last attendance submission from local storage
    const lastSubmissionDate = localStorage.getItem('lastAttendanceSubmissionDate');
    const currentDate = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD

    // Check if the attendance for the current day has already been submitted
    if (lastSubmissionDate !== currentDate) {
      try {
        // Send individual requests for each attendance item
        for (const { teacherId, isTeacherPresent } of attendance) {
          await axios.post('http://localhost:5198/api/TeacherAttendance/AddTeachAttendence', { teacherId, isTeacherPresent }, {
            headers: { 'Content-Type': 'application/json' }
          });
        }

        // After successful submission, store the current date in local storage
        localStorage.setItem('lastAttendanceSubmissionDate', currentDate);
        
        setMessage('Attendance submitted successfully');
        // Reset the attendance state after submission
        setAttendance([]);
      } catch (error) {
        console.error('Error submitting attendance:', error);
        setMessage('An error occurred while submitting attendance');
      }
    } else {
      setMessage('Attendance has already been submitted for today.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Teacher Attendance</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <table className="table">
          <thead>
            <tr>
              <th>Teacher ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              teacher.teacherId != null && (
                <tr key={teacher.teacherId}>
                  <td>{teacher.teacherId}</td>
                  <td>{teacher.teacherFirstName}</td>
                  <td>{teacher.teacherLastName}</td>
                  <td>
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`teacher_${teacher.teacherId}_P`}
                        checked={attendance.some(item => item.teacherId === teacher.teacherId && item.isTeacherPresent === 'P')}
                        onChange={(event) => handleCheckboxChange(teacher.teacherId, 'P')}
                      />
                      <label className="form-check-label" htmlFor={`teacher_${teacher.teacherId}_P`}>
                        Present
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`teacher_${teacher.teacherId}_A`}
                        checked={attendance.some(item => item.teacherId === teacher.teacherId && item.isTeacherPresent === 'A')}
                        onChange={(event) => handleCheckboxChange(teacher.teacherId, 'A')}
                      />
                      <label className="form-check-label" htmlFor={`teacher_${teacher.teacherId}_A`}>
                        Absent
                      </label>
                    </div>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">Submit Attendance</button>
        </div>
      </form>
    </div>
  );
};

export default AddAttendanceTeacher;
