import React, { useState } from 'react';

import emailjs from '@emailjs/browser';

 

const Email = () => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');

 

    const handleSubmit = (e) => {

        e.preventDefault();

   const serviceId ='service_jq77jc8'

   const templateID ='template_7z596vq';

   const publicKey ='whzsGe6AHnvtAOBNb';

 

   //create a new object that conatins dynamic template parms

   const templateParams ={

    from_name: name,

    from_email: email,

    to_name: name,

    message: message,

   };

 

//send the email usning emails

emailjs.send(serviceId,templateID,templateParams,publicKey)

.then((response)=>{

    console.log('Email send sucessfully',response)

    setName('');

    setEmail('');

    setMessage('');

})

.catch((error)=>{

    console.error('Error sending email',error);

});

    }

 

    return (

        <center>
            <h2>EMAIL</h2><br/><br/><br/>
        <form onSubmit={handleSubmit} className="emailform">
            <table>
                <tr>
                    <th>Name</th>
                    <td>
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                    <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <th>Text</th>
                    <td>
                    <textarea cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </td>
                </tr>
                <center>
            <button type="button" class="btn btn-primary">Send Email</button></center>
            </table>
        </form>
        </center>

    );

}

 

export default Email;