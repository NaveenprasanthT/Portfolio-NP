import React from 'react';
import bmw from '../../assests/bmw.jpg';
import "./About.css"
import {FaGripLines} from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';

function About(){
        return (
        <section id='about'>
            <div className="heading">
                <p>Got to Know</p>
                <h1>About Me</h1>
                <h2><FaGripLines/><FaGripLines/><FaGripLines/><FaGripLines/><span><AiOutlineSend/></span><FaGripLines/></h2>
            </div>
            <div className="abt_main">
                <div className="photo_container">
                        <img src={bmw} />
                </div>
                <div className='article'>
                    <p>Hi,I'm Naveenprasanth...
                    I am studing my UG degree in Computer Science.I consider myself as a self tought Programmer.
                    My short term goal is to Get a good job and become financially free.
                    My long term goal is to become a Full-Stack Web Developer.</p>
                    <br/>
                    <a href='#contact'>
                    <button className='talk'>
                        Let's talk
                    </button>
                    </a>
                </div>   
            </div>
        </section>
        );
}
 
export default About;