import { React, useState, useEffect } from "react";
import axios from "axios";
const GetNotification = () => {
  const [notifications, GetAll] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5198/GetNotification/")
      .then((response) => {
        
        console.log(response.data); //response.data return json data send by API
        GetAll(response.data); //add response data to students state
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <div className="table table-primary">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>NotificationID</th>
            <th>Message</th>
            <th>Date</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => {
            return (
              <tr key={notification.notificationId}>
                <td>{notification.notificationId}</td>
                <td>{notification.message}</td>
                <td>{notification.date}</td>
                <td>{notification.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default GetNotification;
