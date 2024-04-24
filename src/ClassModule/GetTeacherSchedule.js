import { React, useState, useEffect } from "react";

import axios from "axios";

const GetTeacherSchedule = () => {
    const [teacherSchedule, getTeachersSchedule] = useState([]);
    const [teacherId,setTeacherId] =useState("");
    
   
    useEffect(() => {
        axios
          .get("http://localhost:5198/api/ClassSchedule/GetTeacherSchedule/"+teacherId)
          .then((response) => {
            console.log(response.data); 
            getTeachersSchedule(response.data); })
          .catch((error) => {
            console.log(error);
          });
      },[teacherId]);


    
    
    
    return (
        <div className="container">
        <form >
          <label>TeacherId</label>
        <input
                  type="text"
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                />
                
        </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>classId</th>
            <th>timeSlot</th>
            
          </tr>
        </thead>
        <tbody>
          {teacherSchedule.map((teacher) => {
            return (
              <tr key={teacher.classId}>
                <td>{teacher.classId}</td>           
                <td>{teacher.timeSlot}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    );
}

export default GetTeacherSchedule;
