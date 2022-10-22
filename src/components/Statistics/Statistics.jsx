import PropTypes from 'prop-types';
import { getRandomHexColor } from "common/random";

export function Statistics({ title, stats }) {
    //console.log("title", title, "stats", stats);
        
    return <section className="statistics">
        <h2 className="title">{title ?? ""}</h2>

        <ul className="stat-list" style={{ display: 'flex', gap: '10px' }}>            
            {stats.map(({ label, percentage, id }) => {
                return  <li className="item" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} key={id}>
                            <span className="label">{label}</span>
                            <span className="percentage">{percentage}</span>
                        </li>
            })}            
        </ul>
    </section>;
}

Statistics.propTypes = {
    title: PropTypes.string,    
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
};
