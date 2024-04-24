import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAttendanceStudent = () => {
  const [standards] = useState(' ');
  const [sections] = useState(['A', 'B', 'C', 'D']); // Array of sections A to D
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedStandard && selectedSection) {
      fetchStudents();
    }
  }, [selectedStandard, selectedSection]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`http://localhost:5198/api/Student/Get_Student_by_Class_And_Section/${selectedStandard}/${selectedSection}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleStandardChange = (event) => {
    setSelectedStandard(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleCheckboxChange = (event, studentId, isStudentPresent) => {
    setAttendance(prevAttendance => {
      // Check if the student's attendance record already exists
      const existingAttendanceIndex = prevAttendance.findIndex(item => item.studentId === studentId);
      
      // If it exists, update it; otherwise, add a new one
      if (existingAttendanceIndex >=  0) {
        const updatedAttendance = [...prevAttendance];
        updatedAttendance[existingAttendanceIndex] = { studentId, isStudentPresent };
        return updatedAttendance;
      } else {
        return [...prevAttendance, { studentId, isStudentPresent }];
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      for (const { studentId, isStudentPresent } of attendance) {
        await axios.post('http://localhost:5198/api/Attendance/AddStudAttendence', { studentId, isStudentPresent }, {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      setMessage('Attendance submitted successfully');
      setAttendance([]);
      // Clear message after  5 seconds
      setTimeout(() => {
        setMessage('');
      },  3000);
    } catch (error) {
      console.error('Error submitting attendance:', error);
      setMessage('An error occurred while submitting attendance');
      // Clear message after  5 seconds
      setTimeout(() => {
        setMessage('');
      },  3000);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Student Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="standardSelect" className="form-label">Select Standard:</label>
          <select className="form-select" id="standardSelect" onChange={handleStandardChange} value={selectedStandard}>
            <option value="">Select Standard</option>
            <option value="CL01">CL01</option>
          <option value="CL02">CL02</option>
          <option value="CL03">CL03</option>
          <option value="CL04">CL04</option>
          <option value="CL05">CL05</option>
          <option value="CL06">CL06</option>
          <option value="CL07">CL07</option>
          <option value="CL08">CL08</option>
          <option value="CL09">CL09</option>
          <option value="CL10">CL10</option>
          
             
        
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="sectionSelect" className="form-label">Select Section:</label>
          <select className="form-select" id="sectionSelect" onChange={handleSectionChange} value={selectedSection}>
            <option value="">Select Section</option>
            {sections.map((section, index) => (
              <option key={index} value={section}>{section}</option>
            ))}
          </select>
        </div>
        <table className="table">
          <thead>
            <tr>
            <th>Student ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.studentFirstName}</td>
                <td>{student.studentLastName}</td>
               
                <td>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`student_${student.studentId}_P`}
                      name={`student_${student.studentId}_P`}
                      checked={attendance.some(item => item.studentId === student.studentId && item.isStudentPresent === 'P')}
                      onChange={event => handleCheckboxChange(event, student.studentId, 'P')}
                    />
                    <label className="form-check-label" htmlFor={`student_${student.studentId}_P`}>
                      Present
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`student_${student.studentId}_A`}
                      name={`student_${student.studentId}_A`}
                      checked={attendance.some(item => item.studentId === student.studentId && item.isStudentPresent === 'A')}
                      onChange={event => handleCheckboxChange(event, student.studentId, 'A')}
                    />
                    <label className="form-check-label" htmlFor={`student_${student.studentId}_A`}>
                      Absent
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {message && (
          <div className="mt-3">
         {message && <div className="alert alert-info">{message}</div>}
          </div>
        )}
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">Submit Attendance</button>
        </div>
      </form>
    </div>
  );
};

export default AddAttendanceStudent;
