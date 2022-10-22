import PropTypes from 'prop-types';
import "../SocialsProfile/SocialsProfile.css"

export function SocialsProfile({ username, tag, location, avatar, stats}) {
        
    return <div className='container'>
    <div className="profile">
        <div className="description">
            <img src={avatar} alt="User avatar" className="avatar" />
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
        <ul className="stats">
            <li className='statsList'>
                <span className="label">Followers </span>
                 <span className="quantity">{stats.followers}</span>
            </li>
            <li className='statsList'>
                <span className="label">Views </span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li className='statsList'>
                 <span className="label">Likes </span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
        </div>
    </div>;
};

SocialsProfile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
};