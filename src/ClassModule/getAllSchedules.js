import React, { useState, useEffect } from "react";
import axios from "axios";

const GetAllSchedules = () => {
    

    const [schedules, setSchedules] = useState([]);

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
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:5198/api/ClassSchedule/Delete/${id}`)
            .then((response) => {
                console.log(response.data);
                fetchSchedules(); // Refresh schedules after delete
            })
            .catch((error) => console.error("Error deleting schedule:", error));
    };

    return (
        <div className="container mt-5">
            <h2>Schedule</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Class Schedule ID</th>
                        <th>Class ID</th>
                        <th>Subject ID</th>
                        <th>Teacher ID</th>
                        <th>Time Slot</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule) => (
                        <tr key={schedule.classScheduleId}>
                            <td>{schedule.classScheduleId}</td>
                            <td>{schedule.classId}</td>
                            <td>{schedule.subjectId}</td>
                            <td>{schedule.teacherId}</td>
                            <td>{schedule.timeSlot}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(schedule.classScheduleId)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default GetAllSchedules;
