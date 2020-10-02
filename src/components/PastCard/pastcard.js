import React from 'react';



import Buttoncomponent from '../Button/Button';

import  {
 PastCardcsss, PastCardcss2   
}
    from './pascard.style';

const PastCard = ({data}) => {
    return(
        <>
            {
                data.map((item) =>(
                   
                    <PastCardcsss key={item.id}>
               
                <PastCardcss2>
                <b>{item.date}</b><br />
            <hr></hr>
            <b>{item.deskripsi}</b>
            <br></br>
            <p>{item.went} &nbsp;<text>went</text></p>
            <Buttoncomponent primary="primary" text="View"/>
                </PastCardcss2>
            </PastCardcsss>
            
                ))
            
            }
        </>
    )
}




export default PastCard;
