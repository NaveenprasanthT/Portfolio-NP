import React,{useState} from 'react';
import {AiOutlineHome,AiOutlineProject} from 'react-icons/ai';
import {GiGiftOfKnowledge} from 'react-icons/gi';
import {FiAward} from 'react-icons/fi';
import {MdOutlineContactless} from 'react-icons/md';
import './Nav.css';

function Nav(){

    const[activeNav,setActiveNav] = useState('#header')
    return (
    <nav>
        <a href="#header" onClick={() => setActiveNav("#header")} className={activeNav === '#header' ? 'active' : ''}> <AiOutlineHome/> </a>
        <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'active' : ''}><FiAward/></a>
        <a href="#resume" onClick={() => setActiveNav("#resume")} className={activeNav === "#resume" ? 'active' : ''}> <GiGiftOfKnowledge/> </a>
        <a href="#project" onClick={() => setActiveNav("#project")} className={activeNav === "#project" ? 'active' : ''}><AiOutlineProject/> </a>
        <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : ''}><MdOutlineContactless/></a>
    </nav>
    );
}
 
export default Nav;