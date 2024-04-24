import React, { useState, useEffect } from "react";
import axios from "axios";

const AddMarks = () => {
    const [examId, setExamId] = useState("");
    const [classId, setClassId] = useState("");
    const [students, setStudents] = useState([]);
    const [markofstudent, setMarkOfStudent] = useState({});
    const [examDetails, setExamDetails] = useState([]);
    const [errors, setErrors] = useState({});
    const [classes, setClasses] = useState([]);

    const fetchStudents = (class_Id) => {
        axios
            .get(`http://localhost:5198/api/Student/Get_Student_by_Class/${class_Id}`)
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.error("Error fetching students:", error);
            });
    };

    useEffect(() => { 
        axios
        .get("http://localhost:5198/api/ClassSchedule/GetAllClass")  
        .then((response)=>{
            setClasses(response.data); 
        }) 
        .catch((error) => {
            console.error("Error fetching classes:", error);
        });
    },[]);

    const fetchExam = (class_Id) => {
        axios
        .get("http://localhost:5198/api/Exam/GetExamDetailsforaClass/"+class_Id)
        .then((response) => {
          setExamDetails(response.data); 
        })
        .catch((error) => {
          console.error("Error fetching exam details:", error);
        });
    }

    const handleExamChange = (event) => {
        setExamId(event.target.value)
    };

    const AddMarks = (id, mark) => {
        if (!isValidMark(mark)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [id]: "Marks should be a number between 0 and 100"
            }));
            return;
        }

        setMarkOfStudent(prevMarks => ({
            ...prevMarks,
            [id]: mark
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [id]: null
        }));
    }

    const isValidMark = (mark) => {
        const parsedMark = parseFloat(mark);
        return !isNaN(parsedMark) && parsedMark >= 0 && parsedMark <= 100;
    }

    const updateMarks = () => {
        const marksToUpdate = Object.entries(markofstudent).map(([studentId, mark]) => ({
            markId: examId + studentId,
            examId: examId,
            studentId: studentId,
            mark: mark
        }));

        axios
        .post("http://localhost:5198/api/Mark/AddMarks", marksToUpdate)
        .then((response) => {
            setExamDetails(response.data); 
        })
        .catch((error) => {
            console.error("Error fetching exam details:", error);
        });
    }

    const handleClassChange = (event) => {
        setClassId(event.target.value); 
    };

    return (
        <div className="container">
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='classid'>Class ID:</label>
                <select
                            id="classId"
                            value={classId}
                            onChange={handleClassChange}
                            className={`form-control ${errors.classId ? 'is-invalid' : ''}`}
                        >
                            <option value="">Select a Class</option>
                            {classes.map((classInfo) => (
                                <option key={classInfo.class_Id} value={classInfo.class_Id}>
                                    {`${classInfo.className} - ${classInfo.section} `}
                                </option>
                            ))}
                        </select>
                        <br></br>
                        <button className='btn btn-primary' onClick={(e)=>{ fetchExam(classId)}}>Search for Exam</button>
                        <br></br>
                        <select
                            id="examId"
                            value={examId}
                            onChange={handleExamChange}
                        >
                            <option value="">Select an Exam</option>
                            {examDetails.map((exam) => (
                                <option key={exam.examId} value={exam.examId}>
                                    {`${exam.examName}  `}
                                </option>
                            ))}
                        </select>
                        <br></br>
                        <button className='btn btn-primary' onClick={(e)=>{fetchStudents(classId)}}>Search for Students</button>
                
                    <table className="table table bordered table-dark">
                        <thead>
                        <tr>
                            <td>StudentName</td>
                            <td>Marks</td>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                            {students.map((s)=>(
                              <tr key={s.studentId}>
                                <td>{s.studentFirstName} {s.studentLastName}</td>
                                <td>
                                    <input 
                                        type="number" 
                                        value={markofstudent[s.studentId] || ""} 
                                        onChange={(e)=>AddMarks(s.studentId, e.target.value)} 
                                        className={`form-control ${errors[s.studentId] ? 'is-invalid' : ''}`} 
                                    />
                                    {errors[s.studentId] && <div className="invalid-feedback">{errors[s.studentId]}</div>}
                                </td>
                                <td>
                                    <button className="btn btn-success" onClick={(e) => AddMarks(s.studentId, markofstudent[s.studentId])}>
                                        Add Marks
                                    </button>
                                </td>
                              </tr>  
                            ))}
                        </tbody>
                     </table>           

                     <button className='btn btn-success' onClick={(e)=>updateMarks()}>Update marks</button>
            </form>
        </div>
    );
}

export default AddMarks;



