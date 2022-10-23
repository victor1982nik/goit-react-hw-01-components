import PropTypes from 'prop-types';
import { TableCell, TableCell2 } from './Transaction.styled';

export function Transaction({type, amount, currency}) {
    return <tr>
                <TableCell>{type}</TableCell>
                <TableCell2>{amount}</TableCell2>
                <TableCell2>{currency}</TableCell2>
            </tr>   
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}