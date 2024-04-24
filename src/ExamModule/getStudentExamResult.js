import React, { useState, useEffect } from "react";
import axios from "axios";

const GetStudentExamResult = () => {
    const [examMarksofStudent, getexamMarksofStudent] = useState([]);
    const [studentId, setstudentId] = useState("");

    useEffect(() => {
        axios
          .get("http://localhost:5198/api/Mark/GetExamResult/" + studentId)
          .then((response) => {
            console.log(response.data); 
            getexamMarksofStudent(response.data); 
          })
          .catch((error) => {
            console.log(error);
          });
    }, [studentId]);

    return (
        <div className="container mt-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="studentId" className="form-label">Student ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="studentId"
                        value={studentId}
                        onChange={(e) => setstudentId(e.target.value)}
                    />
                </div>
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Exam Name</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {examMarksofStudent.map((marks, index) => (
                        <tr key={index}>
                            <td>{marks.examName}</td>           
                            <td>{marks.mark}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetStudentExamResult;
