import { React, useState, useEffect } from "react";
import axios from "axios";

const DeleteSchedule = () => {
    const[classScheduleId,setClassScheduleId] = useState();
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
    const Delete =()  =>{ 
        axios
      .delete("http://localhost:5198/api/ClassSchedule/Delete/"+ classScheduleId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    }
    const handleClassScheduleChange= (event) => {
        const { value } = event.target;
        setClassScheduleId(value);
      };
    return (
        // <div>
        //     <form onSubmit={Delete}>
        //         <table>
        //             <tr>
        //                 <td>ClassSchedule</td>
        //                 <td> <select value={classScheduleId} onChange={handleClassScheduleChange}>
        //                         <option value="">Select </option>
        //                         {schedules.map((schedule) => (
        //                           <option key={schedule.classScheduleId} value={schedule.classScheduleId}>
        //                             {`${schedule.classScheduleId}  `}
        //                           </option>
        //                         ))}
        //                       </select>
                  
        //           </td>
        //             </tr>
        //             <tr>
        //                 <button type="submit">Delete</button>
        //             </tr>
        //         </table>
        //     </form>
            
        // </div>
        <div className="container">
    <form onSubmit={Delete}>
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
        </div>
        <div className="row">
            <div className="col-md-12">
                <button type="submit" className="btn btn-danger">Delete</button>
            </div>
        </div>
    </form>
</div>

    );
}

export default DeleteSchedule;
