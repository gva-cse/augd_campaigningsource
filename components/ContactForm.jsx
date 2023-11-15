import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
export const ContactForm = () => {
    const form = useRef();

    const createAlert = (message) => {
        const alertBox = document.querySelector('.alert');
        alertBox.innerHTML = message;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9bzyutl', 'template_r938qvo', form.current, 'Rv5e_uBZzEM1DIk9W')
            .then((result) => {
                createAlert('Message Sent Successfully!');
                console.log(result.text);
            }, (error) => {
                createAlert('Message Sending Failed!, Try Again Later!');
                console.log(error.text);
            });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <label>Name</label>
                <input type="text" name="user_name" placeholder='Your Name' className='outline-none p-2 text-black rounded-md mb-2' required />
                <label>Email</label>
                <input type="email" name="user_email" placeholder='Your Email' className='outline-none p-2 text-black rounded-md mb-2' required />
                <label>Message</label>
                <textarea name="message" placeholder='What you wanna say to us?' className='outline-none p-2 text-black rounded-md mb-2 w-full' required />
                <div className='w-1/3'><button className='btn-primary'>Send</button></div>
            </form>
            <div className="alert"></div>
        </>

    );
};

export default ContactForm;