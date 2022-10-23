import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';
import { Container, HeaderCell } from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
    //console.log(transactions);
    return <Container>
        <table>
            <thead>
                <tr>
                    <HeaderCell>Type</HeaderCell>
                    <HeaderCell>Amount</HeaderCell>
                    <HeaderCell>Currency</HeaderCell>
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
    </Container>
}


TransactionHistory.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
};