import React, { useState, useEffect } from "react";
import axios from "axios";

const GetAllExamDetails = () => {
    const [examDetails, setExamDetails] = useState([]);

    useEffect(() => { 
        axios
          .get("http://localhost:5198/api/Exam/GetAllExamDetails")
          .then((response) => {
            console.log(response.data); 
            setExamDetails(response.data); 
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);

    return (
        <div className="container">
            <h2>Exam Details</h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Exam ID</th>
                        <th>Exam Name</th>
                        <th>Exam Date</th>
                        <th>Class ID</th>
                    </tr>
                </thead>
                <tbody>
                    {examDetails.map((examDetail) => {
                        // Convert exam date to a Date object
                        const examDate = new Date(examDetail.examDate);
                        // Format the exam date as YYYY-MM-DD
                        const formattedDate = examDate.toISOString().split('T')[0];
                        return (
                            <tr key={examDetail.examId}>
                                <td>{examDetail.examId}</td>
                                <td>{examDetail.examName}</td>
                                <td>{formattedDate}</td>
                                <td>{examDetail.classId}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GetAllExamDetails;
