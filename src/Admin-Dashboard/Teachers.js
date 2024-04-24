import React from 'react';
import GetByClassId from '../TeacherModule/TeacherByClassId';
import GetBySubject from '../TeacherModule/TeacherBYSubject';
import GetById from '../TeacherModule/TecaherById';

const Teachers = () => {
    return (
        <div>
            <GetByClassId/>
            <GetBySubject/>
            <GetById/>
        </div>
    );
}

export default Teachers;
