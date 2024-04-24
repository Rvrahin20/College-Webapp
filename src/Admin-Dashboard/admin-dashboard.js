import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container ,Button} from 'react-bootstrap';
import Footer from "../Home/Footer";
const AdminDashboard = () => {
  
  const UserName = sessionStorage.getItem("uname");
  useEffect(() => {
    let u = sessionStorage.getItem("uname"); //return value from session storage using key

  }, []);
  return (
    <div>
      <header>
      
      <Navbar expand="lg" fixed="top" className="bg-dark" variant="dark"  >
      <Container>
        <Navbar.Brand  style={{color:"red" ,fontFamily:"monospace" }}>
          <h1>NEXUS UNIVERSITY</h1></Navbar.Brand>
      </Container>
      <Nav>
            
            {/* <Nav.Link ><Link to="/communication" className='l' style={{color:"red"}}>Communication</Link></Nav.Link> */}
            <Button variant="outline-danger"><Link to="/signup" className='l'>LogOut</Link></Button>
           
          </Nav>
      
    </Navbar>
   
      </header>
      
     
      <main>
      <div className="dashboard1">

          <div className="left1">
             <span style={{color:"red"}}>Hello {UserName}</span><br></br> <br></br>
            <Link to="add-student" className='l'>AddStudent</Link>
          <br></br>
          <Link to="add-teacher" className='l'>AddTeacher</Link>
          <br></br>
          <Link to="get-students" className='l'>GetStudents</Link>
            <br></br>
          
            
            <Link to='getallTeachers' className='l'>GetallTeachers</Link>
            <br></br>
            
            <Link to='Student'className='l'>Student</Link>
            <br></br>
            <Link to='AttendenceTeacher' className='l'>AttendenceofTeacher</Link> 
            <br></br>
            <Link to='Examination'className='l' >Examination</Link>
            <br></br>
            <Link to='getAllSchedules'className='l'>GetAllSchedulesInAdmin</Link> 
            <br></br>
            <Link to='Result' className='l'>Result</Link>
            <br></br>
            <Link to='Schedule'className='l'>Schedule</Link>
            <br></br>
            <Link to='Teachers' className='l'>Teachers</Link>
            <br></br>
            <Link to='studentsbyclass' className='l'>StudentsByClass</Link>
            <br></br>
            <Link to='studentsbyclasssection' className='l'>StudentsByClassSection</Link>
            <br></br>
            <Link to='studentsbyid' className='l'>StudentsByID</Link>
            <br></br>
            <Link to='communication' className='l'>Communication</Link>
            <br></br>
            {/* <Link to='communicationEmail' className='l'>Email</Link>
            <br></br> */}
             <Link to='communicationEmail' className='l'>CommunicationEmail</Link>
          </div>
          <div className="right1">
            <Outlet />
          </div>
        </div>
       
      </main>
      <Footer/>
      
    </div>
  );
};
export default AdminDashboard;
