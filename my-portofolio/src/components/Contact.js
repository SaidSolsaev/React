import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./../style/Contact.css";

const SERVICE_ID = "service_2e7w0kd";
const TEMPLATE_ID = "template_wfv0tm7";
const USER_ID = "Y4pvRsKGDxZzSm-IL";

const Contact = () => {
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: "success",
                title: "Message Sent Successfully!"
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: "error",
                title: "Something went wrong. Try again!",
                text: error.text,
            })
        });
        e.target.reset()
    };

    return(
        <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <div className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">Contact Me</p>
                    <p className="text-gray-300 py-4">Send me an Email</p>
                </div>
                
                <form className="flex flex-col max-w-[600px] w-full" onSubmit={handleOnSubmit}>
                    <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="user_name" required/>
                    <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="user_email" required/>
                    <textarea className="p-2 bg-[#ccd6f6]" rows="10" placeholder="Message" name="user_message" required/>
                    <button className="text-white border-2 hover:bg-cyan-500 px-4 py-3 my-8 mx-auto flex items-center hover:border-cyan-500">Send Message</button>
                </form>
                
            

            </div>
        </div>
        
    );
}

export default Contact;