import React from 'react';
import {FaGripLines} from 'react-icons/fa';
import {AiOutlineSend} from 'react-icons/ai';
import shop from '../../assests/projects/shop.png';
import expense from '../../assests/projects/expense.png';
import calc from '../../assests/projects/calc.png';
import './Project.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


import {AiOutlineLeft} from 'react-icons/ai'

const data = [
        {
        web: "Share(Socail Media)",
        photo: ,
        github: "https://github.com/NaveenprasanthT/Share",
        demo:"https://share-np.vercel.app/",
        },
        {
        web: "Expense Tracker(Reactjs)",
        photo: expense,
        github: "https://github.com/NaveenprasanthT/ExpenseTracker",
        demo:"https://expense-tracker-gules.vercel.app/",
        },
        {
            web: "Simple Calculator(Reactjs)",
            photo: calc,
            github: "https://github.com/NaveenprasanthT/Calculator-using-React",
            demo:"https://calculator-using-react-pi.vercel.app/",
            },
        {
        web: "E-commerce Website(Homepage)",
        photo: shop,
        github: "https://github.com/NaveenprasanthT/E-commerce-website-Homepage",
        demo:"https://top-mobiles.000webhostapp.com/",
        },
        ];

console.log({data})

function Project(){ 
        return (
        <section id='project'>
             <div className="heading">
                <h1>Project</h1>
                <h2><FaGripLines/><FaGripLines/><FaGripLines/><span><AiOutlineSend/></span><FaGripLines/></h2>
            </div>
            <p> SWIPE LEFT</p>
            <p><AiOutlineLeft/><AiOutlineLeft/><AiOutlineLeft/><AiOutlineLeft/><AiOutlineLeft/>
            <AiOutlineLeft/><AiOutlineLeft/><AiOutlineLeft/><AiOutlineLeft/><AiOutlineLeft/>
            </p>
            <Swiper 
                  pagination={true} 
                  modules={[Pagination]} 
                  className="mySwiper"
                >
            <div className="pro_main">
            {data.map(({web,photo,github,demo}) => {
            return(
            <SwiperSlide>
            <div className="project_container">
                <h4><u>{web}</u></h4>
                <img src={photo} alt='Not found'/>
                <div>
                    <a href={github} rel="noreferrer" target="_blank">
                    <button className="github">
                        Github
                    </button></a>
                    <a href={demo} rel="noreferrer" target="_blank">
                    <button className="demo">
                        Demo
                    </button></a>
                </div>
            </div>
            </SwiperSlide>
            )
            })
            }
            </div>
            </Swiper>          
        </section>
        );
}

 
export default Project;
