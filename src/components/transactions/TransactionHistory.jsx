import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

export default function TransactionHistory({ list }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {list.map(element => (
          <TransactionItem
            key={element.id}
            type={element.type}
            amount={element.amount}
            currency={element.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
