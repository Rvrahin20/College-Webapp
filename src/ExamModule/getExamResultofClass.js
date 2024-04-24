import React, { useState, useEffect } from "react";
import axios from "axios";

const GetExamResultofClass = () => {
    const [examMarksofClass, setExamMarksofClass] = useState([]);
    const [examId, setExamId] = useState("");
    const [examDetails, setExamDetails] = useState([]);

    useEffect(() => { 
        axios
          .get("http://localhost:5198/api/Exam/GetAllExamDetails")
          .then((response) => {
            setExamDetails(response.data); 
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);

    const handleExamChange = (event) => {
        setExamId(event.target.value);
    };

    const fetchResult = () => {
        axios
        .get(`http://localhost:5198/api/Mark/GetExamDetailsofClass/${examId}`)
        .then((response) => {
            setExamMarksofClass(response.data); 
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <select
                        id="examId"
                        value={examId}
                        onChange={handleExamChange}
                        className="form-select"
                    >
                        <option value="">Select an Exam</option>
                        {examDetails.map((exam) => (
                            <option key={exam.examId} value={exam.examId}>
                                {`${exam.examName}  `}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <button onClick={fetchResult} className="btn btn-primary">Fetch Results</button>
                </div>
            </div>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Student Full Name</th>
                        <th>Mark</th>
                    </tr>
                </thead>
                <tbody>
                    {examMarksofClass.map((marks) => (
                        <tr key={marks.studentFullName}>
                            <td>{marks.studentFullName}</td>
                            <td>{marks.mark}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetExamResultofClass;
