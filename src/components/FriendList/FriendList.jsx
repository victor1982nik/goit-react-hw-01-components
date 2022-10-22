import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem/FriendListItem';
import { FriendList } from './FriendsList.styled';

export function FriendsList({friends}) {
    return  <FriendList>
        {friends.map((friend) => {
            return <FriendsListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            ></FriendsListItem>
                })}
            </FriendList>
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
};