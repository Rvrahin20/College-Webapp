import React, { useState, useEffect } from "react";
import axios from "axios";

const AddExam = () => {
    const [examId, setExamId] = useState("");
    const [examName, setExamName] = useState("");
    const [examDate, setExamDate] = useState("");
    const [classId, setClassId] = useState("");
    const [classes, getClasses] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:5198/api/ClassSchedule/GetAllClass")
            .then((response) => {
                console.log(response.data);
                getClasses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleClassChange = (event) => {
        setClassId(event.target.value);
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!examId.trim()) {
            errors.examId = "Exam ID is required";
            isValid = false;
        }

        if (!examName.trim()) {
            errors.examName = "Exam name is required";
            isValid = false;
        }

        if (!examDate) {
            errors.examDate = "Exam date is required";
            isValid = false;
        }

        if (!classId) {
            errors.classId = "Class ID is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const Save = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let exam = {
                examId: examId,
                examName: examName,
                examDate: examDate.toString(),
                classId: classId,
            };
            axios
                .post("http://localhost:5198/api/Exam/AddExam", exam)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => console.log(error));
        }
    };

    return (
      <div className="container">
      <form onSubmit={Save}>
          <table className="table">
              <tbody>
                  <tr>
                      <td>examId</td>
                      <td>
                          <input
                              type="text"
                              className="form-control"
                              value={examId}
                              onChange={(e) => setExamId(e.target.value)}
                          />
                          {errors.examId && <span className="text-danger">{errors.examId}</span>}
                      </td>
                  </tr>
                  <tr>
                      <td>examName</td>
                      <td>
                          <input
                              type="text"
                              className="form-control"
                              value={examName}
                              onChange={(e) => setExamName(e.target.value)}
                          />
                          {errors.examName && <span className="text-danger">{errors.examName}</span>}
                      </td>
                  </tr>
                  <tr>
                      <td>examDate</td>
                      <td>
                          <input
                              type="date"
                              className="form-control"
                              value={examDate}
                              onChange={(e) => setExamDate(e.target.value)}
                              required
                          />
                          {errors.examDate && <span className="text-danger">{errors.examDate}</span>}
                      </td>
                  </tr>
                  <tr>
                      <td>classId</td>
                      <td>
                          <select
                              id="classId"
                              className="form-control"
                              value={classId}
                              onChange={handleClassChange}
                              required
                          >
                              <option value="">Select a Class</option>
                              {classes.map((classInfo) => (
                                  <option key={classInfo.class_Id} value={classInfo.class_Id}>
                                      {`${classInfo.className} - ${classInfo.section} (${classInfo.class_Id})`}
                                  </option>
                              ))}
                          </select>
                          {errors.classId && <span className="text-danger">{errors.classId}</span>}
                      </td>
                  </tr>
  
                  <tr>
                      <td colSpan={2}>
                          <button type="submit" className="btn btn-primary">Add Exam</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </form>
  </div>
  
    );
}

export default AddExam;

