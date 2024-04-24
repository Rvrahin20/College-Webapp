import React, { useEffect, useState } from 'react';
import axios from "axios";

const AddClassSchedule = () => {
    const [classScheduleId, setClassScheduleId] = useState("");
    const [classId, setClassId] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [teacherId, setTeacherId] = useState("");
    const [timeSlot, setTimeSlot] = useState(0);
    const [timeSlots] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const [errors, setErrors] = useState({});
    const [isClassScheduleValid, setIsClassScheduleValid] = useState(true);
    const [classes, setClasses] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [occupiedTimeSlots, setOccupiedTimeSlots] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [classSchedules, getClassShedules] = useState([]);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const classesResponse = await axios.get("http://localhost:5198/api/ClassSchedule/GetAllClass");
                setClasses(classesResponse.data);

                const subjectsResponse = await axios.get("http://localhost:5198/api/ClassSchedule/GetAllSubjects");
                setSubjects(subjectsResponse.data);
            } catch (error) {
                console.error('Error fetching initial data:', error);
            }
        };
        fetchInitialData();
    }, []);

    useEffect(() => {
        const fetchOccupiedTimeSlots = async () => {
            try {
                if (classId) {
                    const response = await axios.get(`http://localhost:5198/api/ClassSchedule/GetClassSchedule/${classId}`);
                    setOccupiedTimeSlots(response.data);
                } else {
                    setOccupiedTimeSlots([]);
                }
            } catch (error) {
                console.error('Error fetching occupied time slots:', error);
            }
        };
        fetchOccupiedTimeSlots();
    }, [classId]);

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
    useEffect(() => {  
        axios
        .get("http://localhost:5198/api/ClassSchedule/GetAllSchedule")
        .then((response) => {
          console.log(response.data); 
          getClassShedules(response.data); 
        })
        .catch((error) => {
          console.log(error);
        }); 
    },[]);
    const handleClassScheduleChange = (event) => {
      const inputClassScheduleId = event.target.value;
      setClassScheduleId(inputClassScheduleId);
      setIsClassScheduleValid(!classSchedules.some(schedule => schedule.classScheduleId === inputClassScheduleId));
    };

    const handleClassChange = (event) => {
        setClassId(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubjectId(event.target.value);
        let subjectname  = subjects.find(subject => subject.subjectId === event.target.value)
        setSelectedSubject(subjectname.subjectName);
    };

    const handleTeacherChange = (event) => {
        setTeacherId(event.target.value);
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!classScheduleId.trim()) {
            errors.classScheduleId = "Class Schedule ID is required";
            isValid = false;
        }

        if (!classId.trim()) {
            errors.classId = "Class ID is required";
            isValid = false;
        }

        if (!subjectId.trim()) {
            errors.subjectId = "Subject ID is required";
            isValid = false;
        }

        if (!teacherId.trim()) {
            errors.teacherId = "Teacher ID is required";
            isValid = false;
        }

        if (!timeSlot) {
            errors.timeSlot = "Time Slot is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const save = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const classSchedule = {
                    classScheduleId: classScheduleId,
                    classId: classId,
                    subjectId: subjectId,
                    teacherId: teacherId,
                    timeSlot: timeSlot,
                };
                const response = await axios.post("http://localhost:5198/api/ClassSchedule/AddClassSchedule", classSchedule);
                console.log(response.data);
            } catch (error) {
                console.error('Error saving class schedule:', error);
            }
        }
    };

    return (
        <div className="container">
            <h2>Add Class Schedule</h2>
            <form onSubmit={save}>
                <div className="form-group">
                    <label htmlFor="classScheduleId">Class Schedule ID:</label>
                    <input
                        type="text"
                        id="classScheduleId"
                        value={classScheduleId}
                        onChange={handleClassScheduleChange}
                        className={`form-control ${errors.classScheduleId ? 'is-invalid' : ''}`}
                    />
                    {!isClassScheduleValid && <p>Class schedule already exists.</p>}
                    {errors.classScheduleId && <div className="invalid-feedback">{errors.classScheduleId}</div>}
                </div>
                <div className="form-group">
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
                                {`${classInfo.className} - ${classInfo.section} (${classInfo.class_Id})`}
                            </option>
                        ))}
                    </select>
                    {errors.classId && <div className="invalid-feedback">{errors.classId}</div>}
                </div>
                <div className="form-group">
                    <label >Subject ID:</label>
                    <select
                        id="subjectId"
                        value={subjectId}
                        onChange={handleSubjectChange}
                        className={`form-control ${errors.subjectId ? 'is-invalid' : ''}`}
                    >
                        <option value="">Select a Subject</option>
                        {subjects.map((subject) => (
                            <option key={subject.subjectId} value={subject.subjectId}>
                                {subject.subjectName}
                            </option>
                        ))}
                    </select>
                    {errors.subjectId && <div className="invalid-feedback">{errors.subjectId}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="teacherId">Teacher ID:</label>
                    <select
                        id="teacherId"
                        value={teacherId}
                        onChange={handleTeacherChange}
                        className={`form-control ${errors.teacherId ? 'is-invalid' : ''}`}
                    >
                        <option value="">Select a Teacher</option>
                        {teachers.map((teacher) => (
                            <option key={teacher.teacherId} value={teacher.teacherId}>
                                {`${teacher.teacherFirstName} ${teacher.teacherLastName} (${teacher.teacherId})`}
                            </option>
                        ))}
                    </select>
                    {errors.teacherId && <div className="invalid-feedback">{errors.teacherId}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="timeSlot">Time Slot:</label>
                    <select
                        id="timeSlot"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className={`form-control ${errors.timeSlot ? 'is-invalid' : ''}`}
                    >
                        <option value="">Select a Time Slot</option>
                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                    {errors.timeSlot && <div className="invalid-feedback">{errors.timeSlot}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Add Schedule</button>
            </form>
        </div>
    );
}

export default AddClassSchedule;

