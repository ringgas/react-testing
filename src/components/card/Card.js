import React from 'react';



import AvatarImages from  '../../assets/w644.jpg'
import Avatar from '../Avatar/Avatar';
import Buttoncomponent from '../Button/Button';

import {
    Title, CardMeetup, CardMeetup2
}  from './card.style';




const Card = (PropsCard) => {
   

    return(
        <div >
            <CardMeetup>
                <div ><Avatar src={AvatarImages} alt={AvatarImages}/></div>
                
                <CardMeetup2>
               
    <h1>
    Hacktiv8 Meetup
    </h1>

                <table>
               
                <tr>
                    <td>Location</td>
                    <td></td>
                    <td><p id="location">location : {PropsCard.location}</p></td>
                </tr>
                <tr>
                <td>Members</td>
                <td></td>
                 <td><p id="members">members : {PropsCard.members}</p></td>
                </tr>
                <tr>
                <td>Organizers</td>
                <td></td>
                 <td><p id="organizer">organizer : {PropsCard.organizer}</p></td>
                </tr>
                <tr>
                <td><Buttoncomponent text="Join Us"></Buttoncomponent></td>
                <td></td>
                 <td><Buttoncomponent primary="primary" text="Sign Up"></Buttoncomponent></td>
                </tr>
              
               
               </table>
               </CardMeetup2>
                </CardMeetup>
        </div>
    )
}


export default Card;