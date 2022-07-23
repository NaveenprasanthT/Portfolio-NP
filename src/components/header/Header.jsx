import React,{Component} from 'react';
import {FiFacebook,FiTwitter,FiLinkedin} from 'react-icons/fi';
import './Header.css'
import Typical from 'react-typical';
import footer from '../../assests/footer.png';

import resume from "../../assests/NP_resume.pdf";

class Header extends Component {
    state = {  } 
    render() { 
        return (
        <section id='header'>
            <div className='header_nav'>
                <div className='logo'>
                    <span className='logo_txt'>NAVEENPRASANTH</span>
                </div>
                <div className='social_media'>
                    <ul>
                        <a href='https://www.facebook.com/profile.php?id=100009413210205' rel="noreferrer" target="_blank"><li> <FiFacebook/> </li></a>
                        <a href="https://twitter.com/Naveen__NP" rel="noreferrer" target="_blank"><li> <FiTwitter/> </li></a>
                        <a href="https://www.likedin.com/in/naveen-prasanth-t-856142220" rel="noreferrer" target="_blank"><li> <FiLinkedin/> </li></a>
                    </ul>
                </div>
            </div>
            <div className="me">
                <div className="about_me">
                    <h1>Hello,I'M <span>Naveen</span></h1>
                    <div className="type">
                        <Typical 
                            loop={Infinity}
                            steps={[
                                "HTML😀 ",
                                1000,
                                "Css😍 ",
                                1000,
                                "JavaScript🤠 ",
                                1000,
                                "React_js😎 ",
                                1000,
                                "Material UI💀 ",
                                1000,
                            ]}
                        />
                    </div>
                    <div className="para">
                        <p><i>Knock of building applications with forntend and backend operations.</i></p>
                    </div>
                    <div className="btn">
                        <a href='#contact'><button className='hire'>Hire Me</button></a>
                        <a href={resume} download><button className='resume'>Get Resume</button></a>
                    </div>
                </div>
                <div className="img">
                    <div className="img_profile">
                    </div>
                </div>
            </div>
            <img src={footer} alt="not found"/>
        </section>
        );
    }
}
 
export default Header;
