import { React, useState, useEffect } from "react";

import axios from "axios";

const GetClassScheduleByID = () => {
    const [classIdSchedule, getClassSchedule] = useState([]);
    const [classes, getClasses] = useState([]);
    const [classId,setClassId] =useState("");
    useEffect(()=>{
      axios
        .get("http://localhost:5198/api/ClassSchedule/GetAllClass")
        .then((response) => {
          console.log(response.data); 
          getClasses(response.data); 
        })
        .catch((error) => {
          console.log(error);
        });
    },[]);
    useEffect(() => {
        axios
          .get("http://localhost:5198/api/ClassSchedule/GetClassSchedule/"+classId)
          .then((response) => {
            console.log(response.data); 
            getClassSchedule(response.data); 
          })
          .catch((error) => {
            console.log(error);
          });
      },[classId]);
      const handleClassChange = (event) => {
        setClassId(event.target.value);
       
      };
    return (
        <div className="container">
        <form >
        <table>
          <tr>
            <td>ClassId</td>
            <td><select value={classId} onChange={handleClassChange}>
                                <option value="">Select a Class</option>
                                {classes.map((classInfo) => (
                                  <option key={classInfo.class_Id} value={classInfo.class_Id}>
                                   {classInfo.class_Id}
                                  </option>
                                ))}
                                </select>
                                </td>
          </tr>
        </table>
        </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>subjectId</th>
            <th>teacherId</th>
            <th>timeSlot</th>
          </tr>
        </thead>
        <tbody>
          {classIdSchedule.map((cschedule) => {
            return (
              <tr key={cschedule.subjectId}>
                <td>{cschedule.subjectId}</td>
                <td>{cschedule.teacherId}</td>
                
              
                <td>{cschedule.timeSlot}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    );
}

export default GetClassScheduleByID;
