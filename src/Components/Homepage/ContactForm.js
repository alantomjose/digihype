import React,{useState} from 'react'
import * as emailjs from 'emailjs-com'

export default function ContactForm() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const sendMail=(e)=>{
        e.preventDefault()
        let templateParams = {
            from_name: name,
            to_name: email,
            subject: 'DigiHype Email',
            message_html: message,
           }
           emailjs.send(
            'gmail',
            'template_QjkqayQw',
             templateParams,
            'user_laNkvA6BtpRod1c5ZwObY'
           ).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
           setname("");
           setemail("");
           setmessage("");
    }
    

    return (
        <div className="">
        <div className="skewedtop bg-black h-40 w-full contactbox "> </div>
        

        <div className=" py-12 px-2 sm:px-20 md:px-40 lg:px-40  bg-black contactbox" >
            <div className="bg-gray-200 py-12  px-20 m-3 sm:mx-0 lg:mx-48 rounded-lg text-center">
                <h1 className="text-2xl font-heading">Contact Us</h1>
                
                <div class="mb-3 pt-2 text-left  mx-5">
                    <label for="name" className="text-sm font-bold text-gray-700">Name: </label>
                    <input type="text" name="Name" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}}
                    class="px-2 py-1 placeholder-gray-600 text-gray-700 relative bg-white bg-white rounded text-lg shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                </div>

                <div class="mb-3 pt-2 text-left  mx-5">
                    <label for="name" className="text-sm font-bold text-gray-700">Email: </label>
                    <input type="email" name="Email" placeholder="Email"  value={email} onChange={(e)=>{setemail(e.target.value)}}
                    class="px-2 py-1 placeholder-gray-600 text-gray-700 relative bg-white bg-white rounded text-lg shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                </div>

                <div class="mb-3 pt-2 text-left  mx-5">
                    <label for="name" className="text-sm font-bold text-gray-700">Message: </label>
                    <textarea type="text-area" name="Message" placeholder="Message"  value={message} onChange={(e)=>{setmessage(e.target.value)}}
                    class="px-2 py-1 placeholder-gray-600 text-gray-700 relative bg-white bg-white rounded text-lg shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                </div>
                <button className="bg-gray-800 rounded-full text-white px-5 py-2" onClick={(e)=>{sendMail(e)}}>
                    Send
                </button>

            </div>
        </div>

        <div className="skewedbtm h-40 w-full bg-black contactbox"> </div>

        </div>
    )
}
