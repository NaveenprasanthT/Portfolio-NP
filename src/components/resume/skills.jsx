import React from 'react';
import html from '../../assests/skills/html.png';
import css from '../../assests/skills/css.png';
import js from '../../assests/skills/javascript_logo.png';
import reactimg from '../../assests/skills/react.png';
import python from '../../assests/skills/python.png';
import cpp from '../../assests/skills/c++.png';
import java from '../../assests/skills/java.png';

function Skills() {
    return (
        <div>  
        <div className='skill_set'>
            <div className='skill_container'>
                <img src={html} alt="no internet"/>
                <h1>HTML</h1>
            </div>
            <div className='skill_container'>
                <img src={css} alt="no internet"/>
                <h1>CSS</h1>
            </div>
            <div className='skill_container'>
                <img src={js} alt="no internet"/>
                <h1>JavaScript</h1>
            </div>
            <div className='skill_container'>
                <img src={java} alt="no internet"/>
                <h1>Java</h1>
            </div>
            </div>
            <div className='skill_set'>
            <div className='skill_container'>
                <img src={reactimg} alt="no internet"/>
                <h1>React</h1>
            </div>
            <div className='skill_container'>
                <img src={python} alt="no internet"/>
                <h1>Python</h1>
            </div>
            <div className='skill_container'>
                <img src={cpp} alt="no internet"/>
                <h1>C++</h1>
            </div>
            </div>
        </div>
    );
}

export default Skills;