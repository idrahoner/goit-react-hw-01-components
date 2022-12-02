import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ list }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr className={css.headRow}>
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
