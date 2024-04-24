import './App.css';
import Home from './Home/Home';
import About from './Home/About';
import { BrowserRouter, Router, Route, Switch,Routes } from 'react-router-dom';
import Contact from './Home/Contact';

import Layout from './Home/Layout';
import Career from './Home/Career';
import Login from './Login/login';
import AdminDashboard from './Admin-Dashboard/admin-dashboard';


import GetStudents from './Admin-Dashboard/get-students';
import StudentDashboard from './Student-Dashboard/student-dashboard';
import TakeExam from './Student-Dashboard/take-exam';
import ShowMarks from './Student-Dashboard/show-marks';
import PasswordRecoveryForm from './Student-Dashboard/cpwd';
import TeacherDashboard from './Teacher-Dashboard/teacher-dashboard';
import ScheduleExam from './Teacher-Dashboard/schedule-exam';
import GetMarks from './Teacher-Dashboard/get-marks';
import AddStudentinAdmin from './Admin-Dashboard/Students';
import GetallTeachers from './Admin-Dashboard/getallTeachers';
import AddTeacher_inAdmin from './Admin-Dashboard/add-teacher';
import AddStudent from './StudentModule/AddStudent';
import AttendenceofTeacherInAdmin from './Admin-Dashboard/AttendenceTeacher';
import Examination from './Admin-Dashboard/examination';
import GetAllSchedulesInAdmin from './Admin-Dashboard/getAllSchedules';
import Result from './Admin-Dashboard/Result';
import Teachers from './Admin-Dashboard/Teachers';
import Schedule from './Admin-Dashboard/Schedule';

import CommunicationAdmin from './Admin-Dashboard/Communication-Admin';
import GetStudentsByClass from './Admin-Dashboard/GetStudentsByClass';
import StudentsById from './Admin-Dashboard/StudentsById';
import StudentsByClassSection from './Admin-Dashboard/StudentsByClassSection';
import AddMark from './Teacher-Dashboard/AddMark';
import ViewExamResultByClass from './Teacher-Dashboard/ViewExamResultByClass';
import AddStudentsAttendance from './Teacher-Dashboard/AddStudentsAttendance';
import TeachersAttendanceBYId from './Teacher-Dashboard/TeachersAttendanceBYId';
import TeachersAttendanceBYMonth from './Teacher-Dashboard/TeachersAttendanceBYMonth';
import GetsClassScheduleBYId from './Teacher-Dashboard/GetsClassScheduleBYId';
import StudentsAttendanceByid from './Student-Dashboard/StudentsAttendanceByid';
import StudentsAttendanceByMonth from './Student-Dashboard/StudentsAttendanceByMonth';
import ExamsDetails from './Student-Dashboard/ExamsDetails';
import StudentsExamResult from './Student-Dashboard/StudentsExamResult';
import CommunicationEmail from './Admin-Dashboard/Communication-Email';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path='career' element={<Career/>}/>
           <Route path='signup' element={<Login/>}/>
        </Route>
        <Route path="admin-dashboard" element={<AdminDashboard/>}>
            <Route path="add-student" element={<AddStudent/>} />
            <Route path="add-teacher" element={<AddTeacher_inAdmin/>} />
            <Route path='getallTeachers' element={<GetallTeachers/>}/>
            <Route path="get-students" element={<GetStudents/>} />
            <Route path='Student' element={<AddStudentinAdmin/>}/>
            
            <Route path='AttendenceTeacher' element ={<AttendenceofTeacherInAdmin/>}/>
            <Route path='Examination' element ={<Examination/>}/>
            <Route path='getAllSchedules' element ={<GetAllSchedulesInAdmin/>}/>
            <Route path='Result' element ={<Result/>}/>
            <Route path='Schedule' element ={<Schedule/>}/>  
            <Route path='Teachers' element ={<Teachers/>}/>
            <Route path='studentsbyclass' element ={<GetStudentsByClass/>}/>
            <Route path='studentsbyclasssection' element ={<StudentsByClassSection/>}/>
            <Route path='studentsbyid' element ={<StudentsById/>}/>
            <Route path='communication' element ={<CommunicationAdmin/>}/>
            <Route path='communicationEmail' element ={<CommunicationEmail/>}/>
            
           
           
          </Route>
          <Route path="student-dashboard" element={<StudentDashboard/>}>
            <Route path="take-exam" element={<TakeExam/>} />
            <Route path="show-marks" element={<ShowMarks/>} />
            
            <Route path="studentattendancebyid" element={<StudentsAttendanceByid/>} />
            <Route path="studentattendancebymonth" element={<StudentsAttendanceByMonth/>} />
            <Route path="examsdetails" element={<ExamsDetails/>} />  
            <Route path="examsdetailsstudent" element={<StudentsExamResult/>} />

          </Route>
          <Route path="teacher-dashboard" element={<TeacherDashboard/>}>
            <Route path="schedule-exam" element={ <ScheduleExam/>} />
            <Route path="get-marks" element={<GetMarks/>} />
       
            <Route path='addmarks' element ={<AddMark/>}/>
            <Route path='marksofclass' element ={<ViewExamResultByClass/>}/>
            <Route path='studentattendance' element ={<AddStudentsAttendance/>}/>
            <Route path='teacherattendancebyid' element ={<TeachersAttendanceBYId/>}/>
            <Route path='teacherattendancebymonth' element ={<TeachersAttendanceBYMonth/>}/>
            <Route path='classschedulebyid' element ={<GetsClassScheduleBYId/>}/>


          </Route>
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
