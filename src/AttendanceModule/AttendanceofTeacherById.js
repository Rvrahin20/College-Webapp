import { React, useState, useEffect } from "react";
 
import axios from "axios";
 
const GetById = () => {
    const [id, GetTeacherBYId] = useState([]);
    const [ids,setTeacherId] =useState("");
    useEffect(() => {
        axios
          .get("http://localhost:5198/api/TeacherAttendance/GetTeachAttendenceById/"+ ids)
          .then((response) => {
            console.log(response.data);
            GetTeacherBYId([response.data]);
          })
          .catch((error) => {
            console.log(error);
           
          });
      },[ids]);
    return (
        <div className="container">
        <form >
            <td>Enter The Teachers Id</td>
        <input
                  type="text"
                  value={ids}
                  onChange={(e) => setTeacherId(e.target.value)}
                />
               
        </form>
        <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Total Working Days</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
       
          {id.map((teachers) => {
            return (
              <tr key={teachers.teacherId}>
                <td>{teachers.totalWorkDays}</td>
                <td>{teachers.present}</td>
                <td>{teachers.absent}</td>
                <td>{teachers.attendancePercentage}</td>
               
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
    </div>
    );
}
 
export default GetById;
