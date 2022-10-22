import PropTypes from 'prop-types';
import css from './SocialsProfile.module.css';

export function SocialsProfile({ username, tag, location, avatar, stats}) {
        
    return <div className={css.container}>
        <div className={css.profile}>
            <div className={css.description}>
                <img src={avatar} alt="User avatar" className={css.avatar} />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statsList}>
                    <span className={css.label}>Followers </span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.statsList}>
                    <span className={css.label}>Views </span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li className={css.statsList}>
                    <span className={css.label}>Likes </span>
                    <span className={css.quantity}>{stats.likes}</span>
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