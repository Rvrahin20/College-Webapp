import { React, useState } from "react";
import axios from "axios";
const NotificationForm = () => {
  const [id, setId] = useState("");
  const [msg, setMessage] = useState("");
  const [dat, setDate] = useState("");
  const [rol, setRole] = useState("");
  const Save = (e) => {
    e.preventDefault();
    let notification = {
    notificationId: id,
    message: msg,
    date: dat,
    role: rol,
    };
    console.log(notification);
    axios
      .post("http://localhost:5198/AddNotification/",notification)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const Search = () => {
    axios
      .get("http://localhost:5198/GetNotification/" + id)
      .then((response) => {
        console.log(response.data);
        setId(response.data.id);
        setMessage(response.data.msg);
        setDate(response.data.dat);
        setRole(response.data.rol);
      })
      .catch((error) => console.log(error));
  };
  const Edit = () => {
    let notification = {
        notificationId: id,
        message: msg,
        date: dat,
        role: rol,
    };
    axios
      .put("http://localhost:5198/EditNotification/", notification)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const Delete = (e) => {
    e.preventDefault();
    axios
      .delete("http://localhost:5198/DeleteNotification/" + id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };


return (
    <div className="email-form">
      <form onSubmit={Save}>
      <center><h2>COMMUNICATION PORTAL</h2></center><br/><br/><br/>
        <table className="table table striped" >
      
          <tbody >
            
            <tr>
              <td>NotificationId</td>
              <td>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Message</td>
              <td>
                <input
                  type="text"
                  value={msg}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>date</td>
              <td>
                <input
                  type="date"
                  value={dat}
                  onChange={(e) => setDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
            <label htmlFor="message">Select Recipients</label>
              <td>
              <label className="container1">Teacher </label>
                   <input type="checkbox"  value={rol}
                  onChange={(e) => setRole(e.target.value)} />
                   <span className="checkmark"></span>
                
                 <label className="container1">Students   </label>
                 <input type="checkbox" value={rol}
                  onChange={(e) => setRole(e.target.value)} />
                   <span className="checkmark"></span>
               
                 <label className="container1">Users </label>
                <input type="checkbox" value={rol}
                  onChange={(e) => setRole(e.target.value)}  />
                   <span className="checkmark"></span>
              </td>
            </tr>
              <tr>
              <td colSpan={2}>
                <button type="submit" class="btn btn-primary" onClick={Save}>
                  Add</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-info" onClick={Search}>
                  Search
                </button>&nbsp;&nbsp;
                <button type="button" class="btn btn-secondary" onClick={Edit}>
                  Edit
                </button>&nbsp;&nbsp;
                <button type="button" class="btn btn-danger" onClick={Delete}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        
        </table>
      </form><br/><br/><br/>
    </div>


   
  );
};

export default NotificationForm;

// {/* <div className="email-form">
// <h1>COMMUNICATION </h1><br/><br/>

// <form onSubmit={Save}>
//   <label htmlFor="email" >NotificationId</label>
//   <input type="text"



//   /><br/><br/>
//   <label htmlFor="message">Message</label>
//   <textarea
//     placeholder="Enter your message here..."
//   //   value={msg}
//     name="message"

//   /><br/><br/>
//   <label htmlFor="email" spacing={4}> date</label>
//   <input
//   //   value={dat}

//   /><br/><br/>
//   <div value={rol}>
//     {/* <h1>Select Recipients   </h1> */}
//     <label htmlFor="message">Select Recipients</label>
//     <label className="container1">Teacher
//       <input type="checkbox" value="teacher"  />
//       <span className="checkmark"></span>
//     </label>
//     <label className="container1">Students
//       <input type="checkbox" value="students" />
//       <span className="checkmark"></span>
//     </label>
//     <label className="container1">Users
//       <input type="checkbox" value="AllUsers"  />
//       <span className="checkmark"></span>
//     </label>
//   </div><br/><br/>
//   <button type="submit">
//     Send Message
//   </button>
// </form>
// </div> */}