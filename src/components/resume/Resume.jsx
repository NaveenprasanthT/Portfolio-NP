import React,{useState} from 'react';
import {FaGripLines} from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';
import './Resume.css'
import Personal from './personal';
import Education from './education';
import Language from './language';
import Skills from './skills';

function Resume(){ 
        
        const [resumeMenu,setResumeMenu] = useState('skill');

        return (
        <section id='resume'>
            <div className="heading">
                <h1>Resume</h1>
                <h2><FaGripLines/><FaGripLines/><FaGripLines/><span><AiOutlineSend/></span><FaGripLines/></h2>
            </div>
            <div className="resume_main">
                <div className='menu'>
                    <ul>
                        <li onClick={() => setResumeMenu("personal")} className={resumeMenu === 'personal' ? 'active': ''}>Personal Info</li>
                        <li onClick={() => setResumeMenu("education")} className={resumeMenu === 'education' ? 'active': ''}>Educational Qualification</li>
                        <li onClick={() => setResumeMenu("lan")} className={resumeMenu === 'lan' ? 'active': ''}>Languages Known</li>
                        <li onClick={() => setResumeMenu("skill")} className={resumeMenu === 'skill' ? 'active': ''}>Skills</li>
                    </ul>
                </div>
                <div className="content">
                  {resumeMenu === 'personal' ? <Personal/>: ''}
                  {resumeMenu === 'education' ? <Education/> : ''}
                  {resumeMenu === 'lan' ? <Language/>: ''}
                  {resumeMenu === 'skill' ? <Skills/>: ''}
                </div>
            </div>
        </section>
        );
}
 
export default Resume;