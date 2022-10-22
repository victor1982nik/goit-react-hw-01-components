import PropTypes from 'prop-types';
import { Item, Name, Avatar, Status } from './FriendListItem.styled';


export function FriendsListItem({avatar, name, isOnline}) {
    return  <Item>
        <Status online={isOnline}></Status>
                <Avatar src={avatar} alt="User avatar"  />
                <Name>{name}</Name>
            </Item>
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired  
};