import React, { useState, useEffect } from "react";
import axios from "axios";

const AssignTeacher = () => {
    const [classScheduleId, setClassScheduleId] = useState("");
    const [schedules, setSchedules] = useState([]);
    const [teacherId, setTeacherId] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchSchedules();
    }, []);

    const fetchSchedules = () => {
        axios
            .get("http://localhost:5198/api/ClassSchedule/GetAllSchedule")
            .then((response) => {
                setSchedules(response.data);
            })
            .catch((error) => {
                console.error("Error fetching schedules:", error);
            });

        axios
            .get("http://localhost:5198/api/ClassSchedule/GetAllSubjects")
            .then((response) => {
                setSubjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching subjects:", error);
            });
    };

    const handleClassScheduleChange = (event) => {
        const { value } = event.target;
        setClassScheduleId(value);
        const selectedSchedule = schedules.find(s => s.classScheduleId === value);
        if (selectedSchedule) {
            setSubjectId(selectedSchedule.subjectId);
            const selectedSubject = subjects.find(s => s.subjectId === selectedSchedule.subjectId);
            setSelectedSubject(selectedSubject.subjectName);
        }
    };

    useEffect(() => {
        const fetchTeachersBySubject = async () => {
            try {
                if (selectedSubject) {
                    const response = await axios.get(`http://localhost:5198/api/Teacher/GetTeacherBySubject/${selectedSubject}`);
                    setTeachers(response.data);
                } else {
                    setTeachers([]);
                }
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };
        fetchTeachersBySubject();
    }, [selectedSubject]);

    const Assign = (e) => {
      e.preventDefault()
        let AssignTeacher = {
            classScheduleId: classScheduleId,
            teacherId: teacherId,
        };
        axios.put("http://localhost:5198/api/ClassSchedule/AssignTeachers", AssignTeacher)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.log(error));
    }

    const handleTeacherChange = (event) => {
        setTeacherId(event.target.value);
    };

    return (
      <div className="container">
                 <form onSubmit={Assign}>
                       <div className="row">
                          <div className="col-md-6">
                               <div className="form-group">
                                  <label htmlFor="classSchedule">Class Schedule</label>
                                 <select id="classSchedule" className="form-control" value={classScheduleId} onChange={handleClassScheduleChange}>
                                      <option value="">Select</option>
                                    {schedules.map((schedule) => (
                                          <option key={schedule.classScheduleId} value={schedule.classScheduleId}>
                                              {schedule.classScheduleId}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label htmlFor="teacherId">Teacher Id</label>
                                  <select id="teacherId" className="form-control" value={teacherId} onChange={handleTeacherChange}>
                                      <option value="">Select a Teacher</option>
                                      {teachers.map((teacher) => (
                                          <option key={teacher.teacherId} value={teacher.teacherId}>
                                              {`${teacher.teacherFirstName} ${teacher.teacherLastName} (${teacher.teacherId})`}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-12">
                              <button type="submit" className="btn btn-primary">Assign Teacher</button>
                          </div>
                      </div>
                  </form>
              </div>
    );
}

export default AssignTeacher;



//     const fetchSchedules = () => {
//         axios
//             .get("http://localhost:5180/api/ClassSchedule/GetAllSchedule")
//             .then((response) => {
//                 setSchedules(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching schedules:", error);
//             });

//         axios
//             .get("http://localhost:5180/api/ClassSchedule/GetAllSubjects")
//             .then((response) => {
//                 setSubjects(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching subjects:", error);
//             });
//     };

//     const handleClassScheduleChange = (event) => {
//         const { value } = event.target;
//         setClassScheduleId(value);
//         const selectedSchedule = schedules.find(s => s.classScheduleId === value);
//         if (selectedSchedule) {
//             setSubjectId(selectedSchedule.subjectId);
//             const selectedSubject = subjects.find(s => s.subjectId === selectedSchedule.subjectId);
//             setSelectedSubject(selectedSubject.subjectName);
//         }
//     };

//     useEffect(() => {
//         const fetchTeachersBySubject = async () => {
//             try {
//                 if (selectedSubject) {
//                     const response = await axios.get(`http://localhost:5180/api/Teacher/GetTeacherBySubject/${selectedSubject}`);
//                     setTeachers(response.data);
//                 } else {
//                     setTeachers([]);
//                 }
//             } catch (error) {
//                 console.error('Error fetching teachers:', error);
//             }
//         };
//         fetchTeachersBySubject();
//     }, [selectedSubject]);

//     const Assign = () => {
//         let AssignTeacher = {
//             classScheduleId: classScheduleId,
//             teacherId: teacherId,
//         };
//         axios.put("http://localhost:5180/api/ClassSchedule/AddClassSchedule", AssignTeacher)
//             .then((response) => {
//                 console.log(response.data);
//             })
//             .catch((error) => console.log(error));
//     }

//     const handleTeacherChange = (event) => {
//         setTeacherId(event.target.value);
//     };

//     return (
//         <div className="container">
//             <form onSubmit={Assign}>
//                 <div className="row">
//                     <div className="col-md-6">
//                         <div className="form-group">
//                             <label htmlFor="classSchedule">Class Schedule</label>
//                             <select id="classSchedule" className="form-control" value={classScheduleId} onChange={handleClassScheduleChange}>
//                                 <option value="">Select</option>
//                                 {schedules.map((schedule) => (
//                                     <option key={schedule.classScheduleId} value={schedule.classScheduleId}>
//                                         {schedule.classScheduleId}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="form-group">
//                             <label htmlFor="teacherId">Teacher Id</label>
//                             <select id="teacherId" className="form-control" value={teacherId} onChange={handleTeacherChange}>
//                                 <option value="">Select a Teacher</option>
//                                 {teachers.map((teacher) => (
//                                     <option key={teacher.teacherId} value={teacher.teacherId}>
//                                         {`${teacher.teacherFirstName} ${teacher.teacherLastName} (${teacher.teacherId})`}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <button type="submit" className="btn btn-primary">Assign Teacher</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default AssignTeacher;

