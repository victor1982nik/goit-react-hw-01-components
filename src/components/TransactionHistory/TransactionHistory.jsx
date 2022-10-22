import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';

export function TransactionHistory({ transactions }) {
    //console.log(transactions);
    return <table className="transaction-history">
             <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
        <tbody>
            {transactions.map((item) => {
                return <Transaction
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency} ></Transaction>
            })}
                 
            </tbody>
           </table>
}


TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
};