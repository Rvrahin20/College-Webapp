import { React, useState } from "react";
import axios from "axios";
const Communication = () => {
  const [id, setId] = useState("");
  const [msg, setMessage] = useState("");
  const [dat, setDate] = useState("");
  const [rol, setRole] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const errors = {};
    let isValid = true;

    if (!id) {
        errors.id = "ID is required";
        isValid = false;
    }
    if (!msg) {
        errors.msg = "Message is required";
        isValid = false;
    }
    if (!dat) {
        errors.dat = "Date is required";
        isValid = false;
    }
    if (!rol) {
        errors.rol = "Role is required";
        isValid = false;
    }
    
    setErrors(errors);
    return isValid;
}

  const Save = (e) => {
    e.preventDefault();
    
    if(validateForm()){
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
    }
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
                 {errors.id && <span className="text-danger">{errors.id}</span>}
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
                 {errors.msg && <span className="text-danger">{errors.msg}</span>}
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
                 {errors.dat && <span className="text-danger">{errors.dat}</span>}
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
                   {errors.rol && <span className="text-danger">{errors.rol}</span>}
              </td>
            </tr>
              <tr>
              <td colSpan={2}>
                <button type="submit" class="btn btn-primary" onClick={Save}>
                  Send</button>&nbsp;&nbsp;
              </td>
            </tr>
          </tbody>
        
        </table>
      </form><br/><br/><br/>
    </div>


   
  );
};

export default Communication;

