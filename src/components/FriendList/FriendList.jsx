import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem/FriendListItem';

export function FriendsList({friends}) {
    return  <ul className="friend-list">
        {friends.map((friend) => {
            return <FriendsListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            ></FriendsListItem>
                })}
            </ul>
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
};