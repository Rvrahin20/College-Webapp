import React from 'react';
import AddClassSchedule from '../ClassModule/AddClassSchedule';
import AssignTeacher from '../ClassModule/AssignTeacher';
import DeleteSchedule from '../ClassModule/DeleteSchedule';
import GetClassScheduleByID from '../ClassModule/GetClassScheduleByID';
import GetTeacherSchedule from '../ClassModule/GetTeacherSchedule';

const Schedule = () => {
    return (
        <div>
            <AddClassSchedule/>
            <AssignTeacher/>
            <DeleteSchedule/>
            <GetClassScheduleByID/>
            <GetTeacherSchedule/>
        </div>
    );
}

export default Schedule;
