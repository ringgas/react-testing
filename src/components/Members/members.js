import React from 'react';


import AvatarImagess from '../../assets/00319942.jpg';

 import AvatarMemberss from '../AvatarMembers/avatarmembers';

import  {
    CardMembers, CardMembers2, Title
} from './members.style';



const MembersCard = (propsOrganizer) => {
    return(
        <div >
            <CardMembers>
            <div > < AvatarMemberss src={AvatarImagess} alt={AvatarImagess}/></div>
                
                <CardMembers2>
                <Title>Organizers</Title>
                <table>
               
                <tr>
                    <td>{propsOrganizer.name}</td>
                    <td></td>
                    <td>{propsOrganizer.sum}</td>
                </tr>
               
                </table>
               
               
                </CardMembers2>
            </CardMembers>
        </div>
    )
}


export default MembersCard;