import PropTypes from 'prop-types';
import { getRandomHexColor } from "common/random";
import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
            
    return <section className={css.statistics}>
        <h2 className={css.title}>{title ?? ""}</h2>

        <ul className={css.stat_list} >            
            {stats.map(({ label, percentage, id }) => {
                return <li className={css.item} style={{backgroundColor:getRandomHexColor()}} key={id}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
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
