import React,{useState} from 'react';
import {FaGripLines} from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';
import './Contact.css';
import {AiOutlineMail,AiOutlineMessage,AiOutlineWhatsApp} from "react-icons/ai";

import { useRef } from 'react';
import emailjs from 'emailjs-com';

import footer from '../../assests/footer.png';
import Message from '../notification/Snackerbar';
import Wait from '../notification/Waiting';


function Contact() {

    const [open,setOpen] = useState(false)
    const [opening,setOpening] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setOpening(true)
  
      emailjs.sendForm('service_gz1qsne', 'template_mrsopda', form.current, 'FbuVEY6vycfDsbHxO')
        .then((result) => {
            console.log(result.text);
            setOpen(true)
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <div className="heading">
                <p>Get in Touch</p>
                <h1>Contact Me</h1>
                <h2><FaGripLines/><FaGripLines/><FaGripLines/><FaGripLines/><span><AiOutlineSend/></span><FaGripLines/></h2>
            </div>
            <div className="image">
            <img src={footer} alt="not found"/>
            </div>
            <div className='contact_options'>
                <div className='contact-left'>
                <article className='menu-msg'>
                    <p><AiOutlineMail/>Email</p>
                    <h6>naveenprasanth2109</h6>
                    <a href='mailto:naveenprasanth2109@gmail.com' target='_blank' rel="noreferrer">Send a mail</a>
                </article>
                <article className='menu-msg'>
                    <p><AiOutlineMessage/>Messenger</p>
                    <h6>NaveenPrasanth NP</h6>
                    <a href='https://m.me/profile.php?id=100009413210205' target='_blank' rel="noreferrer">Send a message</a>
                </article>
                <article className='menu-msg'>
                    <p><AiOutlineWhatsApp/>Whatsapp</p>
                    <h6>9025346687</h6>
                    <a href='https://api.whatsapp.com/send?phone=+919025346687' target='_blank' rel="noreferrer">Send a message</a>
                </article>
                </div>
            <form ref={form} onSubmit={sendEmail}>
            <Wait opening={opening} setOpening={setOpening}/>
            <Message open={open} setOpen={setOpen}/>
                <input type="text" name="name" placeholder="Your Name" required/>
                <input type="email" name='email' placeholder='Your Email' required/>
                <textarea name='msg' rows={7} placeholder="Enter the text here..." required></textarea>
                <button className='btn-btn'type='submit'> Submit </button>
            </form>
            </div>
        </section>
     );
}

export default Contact;

