import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import "./LoginRegister.css"

function Login() 
{

  const [activeClass, setActiveClass] = useState("");

  function handleSlider () 
  {
    if(activeClass != "active")
      setActiveClass("active");
    else
      setActiveClass("");
    }
    const navigate = useNavigate();
    const [PersonalId,setPersonalId]=useState("");
    const [UserName,setUserName]=useState("");
    const [UserEmail,setUserEmail]=useState("");
    const [UserMobile,setUserMobile]=useState("");
    const [UserPassword,setUserPassword]=useState("");
    const [UserRole,setUserRole]=useState("");
    const [message, setMessage] = useState('');
    const [err, setErr] = useState("");
  
    //singup
  
    const handleUserIdChange = (e) => {
     setPersonalId(e.target.value);
    };
  
    const handleUserNameChange = (e) => {
      setUserName(e.target.value);
      
     };
  
     const handleUserEmailChange = (e) => {
      setUserEmail(e.target.value);
      
     };
     const handleUserMobileChange = (e) => {
      setUserMobile(e.target.value);
      
     };
     const handleUserPasswordChange = (e) => {
      setUserPassword(e.target.value);
      
     };
  
     const handleUserRoleChange = (e) => {
      setUserRole(e.target.value);
      
     };
  
    const handleSubmitSignUP = async (e) => {
      e.preventDefault(); 
        let user ={  
          UserName: UserName,
          Email: UserEmail,
          Mobile: UserMobile,
          Password: UserPassword,
          Role: UserRole,
          PersonalId:PersonalId,
        }
        console.log(user);
   
          const response = await axios.post(
            "http://localhost:5198/api/User/Register",user)
            
        .then(response=>{
          console.log(response.data);
          if (response.data==true) {
            setMessage("Registration Successful");
             
          } else {
            setMessage("Registration UnSuccessful UserAlready Present or Not Authorized");
          }
        })
        .catch ((err)=>console.log(err)) 
  
      
    };
   //login

   
  const [user, setUser] = useState({ email: "", password: "" });
  
  const Validate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5198/api/User/Login", user)
      .then((response) => {
        console.log(response.data);
        let validUser = response.data;
        if (validUser != null) {
          //set username in sessionstorage
          sessionStorage.setItem("uname", validUser.userName);
          console.log(validUser.UserName);
          sessionStorage.setItem("personalid",validUser.personalId);
          sessionStorage.setItem("role",validUser.role);
          sessionStorage.setItem("token", validUser.token);
          if (validUser.role === "Admin") {
            navigate("/admin-dashboard");
          } else if (validUser.role === "Student") {
            navigate("/student-dashboard");
          } else if (validUser.role === "Teacher") {
            navigate("/teacher-dashboard");
          }
        } else {
          setErr("Invalid User Credentials");
        }
      })
      .catch((err) => console.log(err));
  };



  return (
    <div id="headerinLayout">
        
        <div className={activeClass + " container1 bg-white rounded-5 shadow position-relative overflow-hidden mt-2"} id="container1">

<div className="form-container1 sign-up">
    <form onSubmit={handleSubmitSignUP}>
    {message && <div className="alert alert-info mt-1 fs-9">{message}</div>}
        <h1>Create Account</h1>
    
               <table className="table ">
          <tr>
            <td>PersonalId</td>
            <td>
              <input
                type="text"
                name="PersonalId"
                value={PersonalId}
                onChange={handleUserIdChange}
              />
            </td>
          </tr>
         
          <tr>
            <td>User Name</td>
            <td>
              <input
                type="text"
                name="UserName"
                value={UserName}
                onChange={handleUserNameChange}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="text"
                name="UserEmail"
                value={UserEmail}
                onChange={handleUserEmailChange}
              />
            </td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>
              <input
                type="text"
                name="UserMobile"
                value={UserMobile}
                onChange={handleUserMobileChange}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                name="UserPassword"
                value={UserPassword}
                onChange={handleUserPasswordChange}
              />
            </td>
          </tr>
          <tr>
            <td>Role</td>
            <td>
              <select name="Role" onChange={handleUserRoleChange}>
                <option value="">Select Role</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">Register</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <span className="text-warning">{err}</span>
            </td>
          </tr>
        </table>
    </form>
</div>

<div className="form-container1 sign-in">
    <form onSubmit={Validate}>
        <h1>Sign In</h1>
        
        <table className="table">
          <tr>
            <td>Email</td>
            <td>
              <input
                type="text"
                value={user.email}
                onChange={(e) =>
                  setUser((prevstate) => ({
                    ...prevstate,
                    email: e.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                value={user.password}
                onChange={(e) =>
                  setUser((prevstate) => ({
                    ...prevstate,
                    password: e.target.value,
                  }))
                }
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">Login</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <span className="text-warning">{err}</span>
            </td>
          </tr>
        </table>
    </form>
</div>

<div className="toggle-container1">
    <div className="toggle">
        <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button onClick={handleSlider} className="hidden" id="login">Sign In</button>
        </div>
        <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button onClick={handleSlider} className="hidden" id="register">Sign Up</button>
        </div>
    </div>
</div>
</div>
    </div>
        
  )

}
export default Login;
