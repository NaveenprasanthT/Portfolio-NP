import React from 'react';
import './Resume.css'

function Personal() {
    return (  
        <div className='personal'>
            <table>
                <tr>
                    <td className='left'>Name</td>
                    <td className='left'>:</td>
                    <td className='right'>Naveenprasanth T</td>
                </tr>
                <tr>
                    <td className='left'>Date Of Birth</td>
                    <td className='left'>:</td>
                    <td className='right'>21/09/2002</td>
                </tr>
                <tr>
                    <td className='left'>Native Place</td>
                    <td className='left'>:</td>
                    <td className='right'>Pollachi</td>
                </tr>
                <tr>
                    <td className='left'>Nationality</td>
                    <td className='left'>:</td>
                    <td className='right'>Indian</td>
                </tr>
                <tr>
                    <td className='left'>Email Id</td>
                    <td className='left'>:</td>
                    <td className='right'>naveenprasanth2109@gmail.com</td>
                </tr>
            </table>
        </div>
    );
}

export default Personal;